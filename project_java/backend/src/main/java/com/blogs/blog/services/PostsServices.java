package com.blogs.blog.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.blogs.blog.models.Posts;
import com.blogs.blog.models.Users;
import com.blogs.blog.repositories.PostsRepository;
import com.blogs.blog.repositories.UserRepository;

@Service
public class PostsServices {
    @Autowired
    private final PostsRepository repository;
    private final UserRepository userRepository;

    public PostsServices(PostsRepository repository,UserRepository userRepository){
        this.repository = repository;
        this.userRepository = userRepository;
    }

    public Posts savePost(Posts post) {
        Optional<Users> user = userRepository.findById(post.getUser_id());
        if(user.isEmpty()){
            throw new Error("Invalid user or post id");
        }
        return repository.save(post);
    }

    public Posts updatePost(Posts post) {
        return repository.save(post);
    }

    public void deletePost(Long id){
        repository.deleteById(id);
    }
    public List<Posts> posts(){
        return repository.findAll();
    }
    
    public Posts post(Long id){
        return repository.findById(id).orElse(null);
    }
}


