package com.project.Online_real_estate_application.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Setter
@Getter
@Table(name = "property")
@NoArgsConstructor
@AllArgsConstructor

public class PropertyEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
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
