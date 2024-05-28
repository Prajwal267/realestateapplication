package com.project.Online_real_estate_application.service.impl;

import com.project.Online_real_estate_application.dto.Userdata;
import com.project.Online_real_estate_application.entity.UserEntity;
import com.project.Online_real_estate_application.mapper.UserMapper;
import com.project.Online_real_estate_application.repository.UserRepository;
import com.project.Online_real_estate_application.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;


@Service
class UserServiceimpl implements UserService {
    private UserRepository userRepository;

    @Autowired
    public UserServiceimpl(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public Userdata createUser(Userdata userdata) {
        UserEntity userEntity = UserMapper.mapToAccount(userdata);
        UserEntity savedUser = userRepository.save(userEntity);
        return UserMapper.mapToAccountData(savedUser);
    }

    @Override
    public Userdata getAccountById(Long id) {
        UserEntity userEntity = userRepository
                .findById(id)
                .orElseThrow(() -> new RuntimeException("User does not exist"));
        return UserMapper.mapToAccountData(userEntity);
    }

    @Override
    public Userdata getAccountByUserName(String username) {
        UserEntity userEntity = userRepository.findByUsername(username);
        return UserMapper.mapToAccountData(userEntity);
    }

    @Override
    public List<Userdata> getAllUsers() {
        List<UserEntity> users = userRepository.findAll();
        List<Userdata> UserDataList = new ArrayList<>();
        for (UserEntity user : users) {
            UserDataList.add(UserMapper.mapToAccountData(user));
        }
        return UserDataList;
    }

    @Override
    public void deleteUser(Long id) {
        userRepository.deleteById(id);
    }

}
