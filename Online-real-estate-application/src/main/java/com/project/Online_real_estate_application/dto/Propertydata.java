package com.project.Online_real_estate_application.dto;

import lombok.AllArgsConstructor;
import lombok.Data;

@AllArgsConstructor
@Data
public class Propertydata {
    private Long id;
    private String title;
    private String type;
    private double bhk;
    private String description;
    private String area;
    private String city;
    private String locationUrl;
    private double price;
    private String imageUrl;
}
