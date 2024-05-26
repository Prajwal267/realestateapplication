package com.project.Online_real_estate_application.dto;

import lombok.AllArgsConstructor;
import lombok.Data;

@AllArgsConstructor
@Data
public class Userdata {
    private Long id;
    private String username;
    private String password;
    private String email;
}
