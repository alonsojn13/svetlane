package com.example.demo.auth;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.user.User;

@Repository 
public interface AuthRepository extends JpaRepository <User, Long> {
        boolean existsByEmail(String email);

        User findByEmail(String email);

}
