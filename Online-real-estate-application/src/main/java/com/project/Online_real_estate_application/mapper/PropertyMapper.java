package com.project.Online_real_estate_application.mapper;


import com.project.Online_real_estate_application.entity.PropertyEntity;
import com.project.Online_real_estate_application.dto.Propertydata;

public class PropertyMapper {
    public static PropertyEntity mapToAccount(Propertydata propertydata) {
        PropertyEntity propertyEntity = new PropertyEntity(
                propertydata.getId(),
                propertydata.getTitle(),
                propertydata.getType(),
                propertydata.getBhk(),
                propertydata.getDescription(),
                propertydata.getArea(),
                propertydata.getCity(),
                propertydata.getLocationUrl(),
                propertydata.getPrice(),
                propertydata.getImageUrl());
        return propertyEntity;
    }

    public static Propertydata mapToAccountData(PropertyEntity propertyEntity) {
        Propertydata propertydata = new Propertydata(
                propertyEntity.getId(),
                propertyEntity.getTitle(),
                propertyEntity.getType(),
                propertyEntity.getBhk(),
                propertyEntity.getDescription(),
                propertyEntity.getArea(),
                propertyEntity.getCity(),
                propertyEntity.getLocationUrl(),
                propertyEntity.getPrice(),
                propertyEntity.getImageUrl()
        );
        return propertydata;
    }
}
