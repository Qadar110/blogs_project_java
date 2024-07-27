package com.blogs.blog.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.blogs.blog.models.Users;

@Repository
public interface UserRepository extends JpaRepository<Users,Long> {
    @Query(value = "SELECT * FROM users WHERE email = ?1 and password = ?2", nativeQuery = true)
    Users findByEmail(String email,String password);
}
