package com.blogs.blog.services;

import java.util.Arrays;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.blogs.blog.models.Users;
import com.blogs.blog.repositories.UserRepository;


@Service
public class UserServices {
    @Autowired
    private final UserRepository repository;

    public UserServices(UserRepository repository){
        this.repository  = repository;
    }

    public Users signUp(Users users){
        return repository.save(users);
    }

    public List<Object> logIn(Users users){
        Users user =  repository.findByEmail(users.getEmail(),users.getPassword());
        return Arrays.asList(user.getId(),user.getName(),user.getEmail()); 

    }
}
