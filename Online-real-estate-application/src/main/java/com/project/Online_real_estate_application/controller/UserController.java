package com.project.Online_real_estate_application.controller;

import com.project.Online_real_estate_application.dto.Userdata;
import com.project.Online_real_estate_application.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

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
    @GetMapping
    public ResponseEntity<List<Userdata>> getAllUsers() {
        List<Userdata> users = userService.getAllUsers();
        return ResponseEntity.ok(users);
    }
    @DeleteMapping("/id/{id}")
    public ResponseEntity<Void> deleteUser(@PathVariable Long id) {
        userService.deleteUser(id);
        return ResponseEntity.ok().build();
    }
    @PutMapping("/{id}")
    public ResponseEntity<Userdata> updateUser(@PathVariable Long id, @RequestBody Userdata userdata) {
        Optional<Userdata> updatedUser = userService.updateUser(id, userdata);
        return updatedUser.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }
    @PatchMapping("/{id}")
    public ResponseEntity<Userdata> partialUpdateUser(@PathVariable Long id, @RequestBody Userdata userdata) {
        Optional<Userdata> updatedUser = userService.partialUpdateUser(id, userdata);
        return updatedUser.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }
}
