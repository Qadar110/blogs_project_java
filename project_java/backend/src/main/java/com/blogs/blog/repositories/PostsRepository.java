package com.blogs.blog.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.blogs.blog.models.Posts;

@Repository
public interface PostsRepository extends JpaRepository<Posts,Long> {
    
}
