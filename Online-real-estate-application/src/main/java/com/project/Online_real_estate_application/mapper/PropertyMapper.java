package com.project.Online_real_estate_application.mapper;


import com.project.Online_real_estate_application.entity.PropertyEntity;
import com.project.Online_real_estate_application.dto.Propertydata;

public class PropertyMapper {
    public static PropertyEntity mapToAccount(Propertydata propertydata) {
        PropertyEntity propertyEntity = new PropertyEntity(
                propertydata.getId(),
                propertydata.getTitle(),
                propertydata.getLocation(),
                propertydata.getDescription(),
                propertydata.getPrice(),
                propertydata.getImageUrl());
        return propertyEntity;
    }

    public static Propertydata mapToAccountData(PropertyEntity propertyEntity) {
        Propertydata propertydata = new Propertydata(
                propertyEntity.getId(),
                propertyEntity.getTitle(),
                propertyEntity.getDescription(),
                propertyEntity.getLocation(),
                propertyEntity.getPrice(),
                propertyEntity.getImageUrl()
        );
        return propertydata;
    }
}
