package com.project.Online_real_estate_application.service;

import com.project.Online_real_estate_application.dto.Propertydata;
import com.project.Online_real_estate_application.dto.Userdata;

import java.util.List;
import java.util.Optional;


public interface UserService {
    Userdata createUser(Userdata userdata);
    Userdata getAccountById(Long id);
    Userdata getAccountByUserName(String username);
    List<Userdata> getAllUsers();
    void deleteUser(Long id);
    Optional<Userdata> updateUser(Long id, Userdata userdata);
    Optional<Userdata> partialUpdateUser(Long id, Userdata userdata);
}
