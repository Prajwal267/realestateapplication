package com.project.Online_real_estate_application.service.impl;

import com.project.Online_real_estate_application.dto.Propertydata;
import com.project.Online_real_estate_application.entity.PropertyEntity;
import com.project.Online_real_estate_application.mapper.PropertyMapper;
import com.project.Online_real_estate_application.repository.PropertyRepository;
import com.project.Online_real_estate_application.service.PropertyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PropertyServiceimpl implements PropertyService {

    private PropertyRepository propertyRepository;
    @Autowired
    public PropertyServiceimpl(PropertyRepository propertyRepository) {
        this.propertyRepository = propertyRepository;
    }

    @Override
    public Propertydata createProperty(Propertydata propertydata) {
        PropertyEntity propertyEntity = PropertyMapper.mapToAccount(propertydata);
        PropertyEntity savedUser = propertyRepository.save(propertyEntity);
        return PropertyMapper.mapToAccountData(savedUser);
    }
}



