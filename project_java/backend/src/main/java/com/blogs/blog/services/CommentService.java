package com.blogs.blog.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.blogs.blog.models.Comments;
import com.blogs.blog.models.Posts;
import com.blogs.blog.models.Users;
import com.blogs.blog.repositories.CommentsRepository;
import com.blogs.blog.repositories.PostsRepository;
import com.blogs.blog.repositories.UserRepository;

@Service
public class CommentService {
    @Autowired
    private final CommentsRepository repository;
    private final UserRepository userRepository;
    private final PostsRepository postsRepository;

    public CommentService(CommentsRepository repository, UserRepository userRepository, PostsRepository postsRepository, PostsRepository postsRepository2, UserRepository userRepository2){
        this.repository = repository;
        this.userRepository = userRepository2;
        this.postsRepository = postsRepository2;
    }

    public List<Comments> commentsPost (Long id) {
        return repository.findByPost_id(id);
    }

    public Comments createComment(Comments comment){
        Optional<Posts> post = postsRepository.findById(comment.getPost_id());
        Optional<Users> user = userRepository.findById(comment.getUser_id());
        if(post.isEmpty() || user.isEmpty()){
            throw new Error("Invalid user or post id");
        }
        return repository.save(comment);
    }
}
