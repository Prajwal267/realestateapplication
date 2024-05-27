package com.project.Online_real_estate_application.repository;

import com.project.Online_real_estate_application.entity.PropertyEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;


public interface PropertyRepository extends JpaRepository<PropertyEntity, Long> {
    List<PropertyEntity> findByLocation(String location);
    List<PropertyEntity> findByPriceBetween(double minPrice, double maxPrice);
    List<PropertyEntity> findByLocationAndPriceBetween(String location, double minPrice, double maxPrice);
}
