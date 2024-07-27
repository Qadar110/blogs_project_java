package com.blogs.blog.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.blogs.blog.models.Comments;
import com.blogs.blog.services.CommentService;

@RequestMapping("/api")
@RestController
public class CommentsController {
    @Autowired
    private final CommentService service;

    public CommentsController (CommentService service){
        this.service = service;
    }

    @PostMapping("/comments/create")
    public Comments create(@RequestBody Comments comment){
        return service.createComment(comment);
    }

    @GetMapping("/comments/{id}")
    public List<Comments> commentsPost (@PathVariable Long id){
        return service.commentsPost(id);
    }
}
