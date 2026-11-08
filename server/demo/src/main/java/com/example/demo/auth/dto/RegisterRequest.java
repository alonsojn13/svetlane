package com.example.demo.auth.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;

public record RegisterRequest(

    @NotBlank (message = "Name is required")
    String name, 

    @NotBlank (message = "Name is required")
    @Email (message = "Email must be valid")
    String email, 


    @NotBlank (message = "Name is required")
    @Size (min = 1, message = "Password need to be greather than 12 characters")
    String password
)
    
    {}