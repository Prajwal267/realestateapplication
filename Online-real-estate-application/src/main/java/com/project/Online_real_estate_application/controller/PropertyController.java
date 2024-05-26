package com.project.Online_real_estate_application.controller;

import com.project.Online_real_estate_application.dto.Propertydata;
import com.project.Online_real_estate_application.service.PropertyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/properties")
public class PropertyController {
    private  PropertyService propertyService;

    @Autowired
    public PropertyController(PropertyService propertyService) {
        this.propertyService = propertyService;
    }
    @PostMapping
    public ResponseEntity<Propertydata> addProperty(@RequestBody Propertydata propertydata){
        return new ResponseEntity<>(propertyService.createProperty(propertydata), HttpStatus.CREATED);
    }
}
