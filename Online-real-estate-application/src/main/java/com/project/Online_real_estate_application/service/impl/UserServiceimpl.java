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
import java.util.Optional;


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

    @Override
    public Optional<Userdata> updateUser(Long id, Userdata userdata) {
        Optional<UserEntity> optionalUserEntity = userRepository.findById(id);
        if (optionalUserEntity.isPresent()) {
            UserEntity userEntity = optionalUserEntity.get();
            userEntity.setUsername(userdata.getUsername());
            userEntity.setPassword(userdata.getPassword());
            userEntity.setEmail(userdata.getEmail());
            UserEntity updatedUser = userRepository.save(userEntity);
            return Optional.of(UserMapper.mapToAccountData(updatedUser));
        } else {
            return Optional.empty();
        }
    }

    @Override
    public Optional<Userdata> partialUpdateUser(Long id, Userdata userdata) {
        Optional<UserEntity> optionalUserEntity = userRepository.findById(id);
        if (optionalUserEntity.isPresent()) {
            UserEntity userEntity = optionalUserEntity.get();
            if (userdata.getUsername() != null){
                userEntity.setUsername(userdata.getUsername());
            }
            if (userdata.getPassword() != null){
                userEntity.setPassword(userdata.getPassword());
            }
            if (userdata.getEmail() != null){
                userEntity.setEmail(userdata.getEmail());
            }
            UserEntity updatedUser = userRepository.save(userEntity);
            return Optional.of(UserMapper.mapToAccountData(updatedUser));
        } else {
            return Optional.empty();
        }
    }

}
