package com.project.Online_real_estate_application.service;

import com.project.Online_real_estate_application.dto.Userdata;

import java.util.List;

public interface UserService {
    Userdata createUser(Userdata userdata);
    Userdata getAccountById(Long id);
    Userdata getAccountByUserName(String username);
}
