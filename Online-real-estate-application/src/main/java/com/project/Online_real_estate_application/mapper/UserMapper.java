package com.project.Online_real_estate_application.mapper;

import com.project.Online_real_estate_application.dto.Userdata;
import com.project.Online_real_estate_application.entity.UserEntity;

public class UserMapper {
    public static UserEntity mapToAccount(Userdata userdata){
        UserEntity userEntity = new UserEntity(
                userdata.getId(),
                userdata.getUsername(),
                userdata.getPassword(),
                userdata.getEmail());
        return userEntity;
    }
    public static Userdata mapToAccountData(UserEntity userEntity){
        Userdata userdata = new Userdata(
                userEntity.getId(),
                userEntity.getUsername(),
                userEntity.getPassword(),
                userEntity.getEmail());
        return userdata;
    }
}
