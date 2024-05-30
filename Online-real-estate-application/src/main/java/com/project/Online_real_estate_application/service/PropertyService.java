package com.project.Online_real_estate_application.service;

import com.project.Online_real_estate_application.dto.Propertydata;

import java.util.List;
import java.util.Optional;

public interface PropertyService {
    Propertydata createProperty(Propertydata propertydata);
    Propertydata getAccountById(Long id);
    Optional<Propertydata> updateProperty(Long id, Propertydata propertydata);
    Optional<Propertydata> partialUpdateProperty(Long id, Propertydata propertydata);
    void deleteProperty(Long id);
    List<Propertydata> getPropertiesByCity(String city);
    List<Propertydata> getPropertiesByPriceRange(double minPrice, double maxPrice);
    List<Propertydata> getPropertiesByCityAndPriceRange(String city, double minPrice, double maxPrice);

}
