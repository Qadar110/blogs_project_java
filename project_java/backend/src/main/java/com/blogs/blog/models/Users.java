package com.blogs.blog.models;

import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "users")
public class Users {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @Column(nullable = false, length = 30)
    private String name;

    @Column(nullable =  false)
    private String email;

    @Column(nullable = false)
    private String password;


    @OneToMany(mappedBy = "user_id", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Posts> posts;

    @OneToMany(mappedBy = "user_id", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Comments> comments;

}
