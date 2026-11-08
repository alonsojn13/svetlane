package com.example.demo.shared;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice 
public class GlobalExceptionHandler {
    
    // We received the customized exception with the two parameters and create the response to client with that parameters
    @ExceptionHandler(ApiException.class)
    public ResponseEntity<String> handleApiException(ApiException exception){
        
        return ResponseEntity.status(exception.getStatus()).body(exception.getMessage());

    }

}
