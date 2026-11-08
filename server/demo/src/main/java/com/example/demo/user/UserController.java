package com.example.demo.user;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.RequestParam;


@RestController 
@RequestMapping("/api/users")
public class UserController {
    


    @GetMapping("/me")
    public String getMethodName(@RequestParam String param) {
        return new String();
    }

    @PatchMapping("/me")
    public String f(@RequestParam String param) {
        return new String();
    }
    
}
