package com.project.Online_real_estate_application.repository;

import com.project.Online_real_estate_application.entity.PropertyEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface PropertyRepository extends JpaRepository<PropertyEntity, Long> {
}
