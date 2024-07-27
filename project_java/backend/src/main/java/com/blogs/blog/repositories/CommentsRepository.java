package com.blogs.blog.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.blogs.blog.models.Comments;

@Repository
public interface CommentsRepository extends JpaRepository<Comments,Long>{
    @Query( value = "SELECT * FROM comments WHERE post_id = ?1",nativeQuery = true)
    List<Comments> findByPost_id(Long id);
    
}
