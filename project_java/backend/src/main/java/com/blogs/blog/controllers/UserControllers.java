package com.blogs.blog.controllers;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.blogs.blog.models.Users;
import com.blogs.blog.services.UserServices;


@RestController
@RequestMapping("/api")
public class UserControllers {
    @Autowired
    private final UserServices services;

    public UserControllers(UserServices services){
        this.services = services;
    }
    
    @PostMapping("/users/sign-up")
    public Users register (@RequestBody Users users){
        return services.signUp(users);
    }

    @PostMapping("/users/log-in")
    public List<Object> login (@RequestBody Users users){
        return services.logIn(users);
    }
    
}
