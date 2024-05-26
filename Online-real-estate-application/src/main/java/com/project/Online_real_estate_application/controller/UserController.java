package com.project.Online_real_estate_application.controller;

import com.project.Online_real_estate_application.dto.Userdata;
import com.project.Online_real_estate_application.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/users")
public class UserController {
    private UserService userService;
    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }
    //add user api
    @PostMapping
    public ResponseEntity<Userdata> addUser(@RequestBody Userdata userdata){
        return new ResponseEntity<>(userService.createUser(userdata), HttpStatus.CREATED);
    }

    //get user api
    @GetMapping("/id/{id}")
    public ResponseEntity<Userdata> getUserById(@PathVariable Long id){
        Userdata userdata = userService.getAccountById(id);
        return ResponseEntity.ok(userdata);
    }
    @GetMapping("/username/{username}")
    public ResponseEntity<Userdata> getUser(@PathVariable(value = "username") String username) {
        return ResponseEntity.ok(userService.getAccountByUserName(username));
    }
}
