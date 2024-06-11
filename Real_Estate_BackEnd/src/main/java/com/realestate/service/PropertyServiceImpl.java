package com.realestate.service;

import java.util.ArrayList;
import java.util.List;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.realestate.dto.PropertyFilterDTO;
import com.realestate.entity.Property;
import com.realestate.repository.PropertyRepository;

import jakarta.persistence.EntityManager;
import jakarta.persistence.criteria.CriteriaBuilder;
import jakarta.persistence.criteria.CriteriaQuery;
import jakarta.persistence.criteria.Predicate;
import jakarta.persistence.criteria.Root;

@Service
public class PropertyServiceImpl implements PropertyService {

	@Autowired
	private PropertyRepository propRepo;

	private final EntityManager entityManager;

	public PropertyServiceImpl(EntityManager entityManager) {
		this.entityManager = entityManager;
	}

	@Override
	public Property saveProperty(Property property) {
		Property addProperty = propRepo.save(property);
		return addProperty;
	}

	@Override
	public Property getPropertyByRegId(String regId) {
		return propRepo.findByPropertyRegId(regId);
	}

	@Override
	public List<Property> getPropertyByAgenName(String agentfullName) {
		return propRepo.findByUserAgentName(agentfullName);
	}

	@Override
	public boolean deletePropertyById(int id) {
		// TODO Auto-generated method stub
		return false;
	}

	@Override
	public List<Property> gettAllProperties() {
		return propRepo.findAll();
	}

	@Override
	public List<Property> getAllPropertiesByLocation(String location) {
		return propRepo.findByPropertyCapital(location);
	}

	@Override
	public boolean validateRegId(String regId) {
		boolean valFlag = false;
		String pattern = "REG\\d{3}";
		Pattern regex = Pattern.compile(pattern);
		Matcher matcher = regex.matcher(regId);
		valFlag = matcher.matches();
		return valFlag;
	}

	@Override
	public boolean getPropertyByPropertyRegId(String propertyRegId) {
		return propRepo.existsByPropertyRegId(propertyRegId);
	}

	@Override
	public Property editProperty(Property property, int id) {
		Property getProperty = propRepo.findById(id).get();
		getProperty.setPropertyRegId(property.getPropertyRegId());
		getProperty.setPropertyName(property.getPropertyName());
		getProperty.setPropertyCategory(property.getPropertyCategory());
		getProperty.setPropertyDescription(property.getPropertyDescription());
		getProperty.setPropertyPrice(property.getPropertyPrice());
		getProperty.setPropertySqFt(property.getPropertySqFt());
		getProperty.setPropertyStatus(property.getPropertyStatus());
		getProperty.setPropertyCapital(property.getPropertyCapital());
		getProperty.setPropertyCity(property.getPropertyCity());
		getProperty.setPropertyImageUrl(property.getPropertyImageUrl());
		return propRepo.save(getProperty);
	}

	@Override
	public List<Property> filterProperties(PropertyFilterDTO filterDTO) {

		CriteriaBuilder criteriaBuilder = entityManager.getCriteriaBuilder();
		CriteriaQuery<Property> criteriaQuery = criteriaBuilder.createQuery(Property.class);
		Root<Property> root = criteriaQuery.from(Property.class);

		List<Predicate> predicates = new ArrayList<>();
		int priceInLakhs = filterDTO.getPropertyPrice();
		int sqFtStr = filterDTO.getPropertySqFt();

		if (priceInLakhs > 0 && sqFtStr > 0) {
			int priceInRupees = priceInLakhs * 100000;
			System.out.println("Price in lakhs: " + priceInLakhs);
			System.out.println("Price in rupees: " + priceInRupees);
			Predicate pricePredicate = criteriaBuilder.lessThanOrEqualTo(root.get("propertyPrice"), priceInRupees);
			Predicate sqFtPredicate = criteriaBuilder.greaterThanOrEqualTo(root.get("propertySqFt"), sqFtStr);
			predicates.add(criteriaBuilder.or(pricePredicate, sqFtPredicate));
		} else if (priceInLakhs > 0) {
			int priceInRupees = priceInLakhs * 100000;
			System.out.println("Price in lakhs: " + priceInLakhs);
			System.out.println("Price in rupees: " + priceInRupees);
			predicates.add(criteriaBuilder.lessThanOrEqualTo(root.get("propertyPrice"), priceInRupees));
		} else if (sqFtStr > 0) {
			predicates.add(criteriaBuilder.greaterThanOrEqualTo(root.get("propertySqFt"), sqFtStr));
		}

		if (filterDTO.getPropertyStatus() != null && !filterDTO.getPropertyStatus().isEmpty()) {
			predicates.add(root.get("propertyStatus").in(filterDTO.getPropertyStatus()));
		}

		if (filterDTO.getPropertyCategory() != null && !filterDTO.getPropertyCategory().isEmpty()) {
			predicates.add(root.get("propertyCategory").in(filterDTO.getPropertyCategory()));
		}

		if (filterDTO.getPropertyCity() != null && !filterDTO.getPropertyCity().isEmpty()) {
			predicates.add(root.get("propertyCity").in(filterDTO.getPropertyCity()));
		}
		criteriaQuery.where(predicates.toArray(new Predicate[0]));
		return entityManager.createQuery(criteriaQuery).getResultList();
	}

	@Override
	public Property findById(int id) {
		return propRepo.findById(id).get();
	}

}
