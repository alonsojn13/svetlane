package com.example.demo.auth;

import java.util.Optional;

import org.springframework.http.HttpStatus;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.example.demo.auth.dto.LoginRequest;
import com.example.demo.auth.dto.LoginResponse;
import com.example.demo.auth.dto.RegisterRequest;
import com.example.demo.shared.ApiException;
import com.example.demo.user.User;
import com.example.demo.user.UserRepository;

@Service
public class AuthService {

    private final AuthRepository authRepository;
    private final PasswordEncoder passwordEncoder;

    public AuthService(PasswordEncoder passwordEncoder, AuthRepository authRepository) {
        this.passwordEncoder = passwordEncoder;
        this.authRepository = authRepository;
    }

    public void register(RegisterRequest request) {
        String email = request.email().trim().toLowerCase();

        if (authRepository.existsByEmail(email)) {
            throw new RuntimeException();
        }

        String passwordHash = passwordEncoder.encode(request.password());

        User user = new User(request.name().trim(), email, passwordHash);

        authRepository.save(user);
    }

    public LoginResponse login(LoginRequest request) {
        String email = request.email().trim().toLowerCase();

       User user = authRepository.findByEmail(email);

        boolean passwordMatches = passwordEncoder.matches(request.password(), user.getPassword());


        if(!passwordMatches) {
            throw new ApiException(HttpStatus.BAD_GATEWAY,"Password is incorrect");
        }
        
        return new LoginResponse(user.getId(), user.getName(), user.getEmail());
    }

}
