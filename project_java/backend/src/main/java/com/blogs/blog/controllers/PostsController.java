package com.blogs.blog.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.blogs.blog.models.Posts;
import com.blogs.blog.services.PostsServices;

@RestController
@RequestMapping("/api")
public class PostsController {
    @Autowired
    private final PostsServices services;

    public PostsController(PostsServices services){
        this.services = services;
    }
    
    @GetMapping("/posts")
    public List<Posts> posts(){
        return services.posts();
    }

    @GetMapping("/posts/{id}")
    public Posts post(@PathVariable Long id){
        return services.post(id);
    }
    
    @PostMapping("/posts/create")
    public Posts createPost(@RequestBody Posts post) {
        return services.savePost(post);
    }


    @PutMapping("/posts/update")
    public Posts updatePost(@RequestBody Posts post) {
        return services.updatePost(post);
    }

    @DeleteMapping("/posts/delete/{id}")
    public void deletePost(@PathVariable Long id) {
        services.deletePost(id);
    }
}
