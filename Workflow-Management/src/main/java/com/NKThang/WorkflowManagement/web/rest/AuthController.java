package com.NKThang.WorkflowManagement.web.rest;

import com.NKThang.WorkflowManagement.payload.request.auth.LoginRequest;
import com.NKThang.WorkflowManagement.payload.request.auth.RegisterRequest;
import com.NKThang.WorkflowManagement.payload.response.AuthResponse;
import com.NKThang.WorkflowManagement.payload.response.Response;
import com.NKThang.WorkflowManagement.service.dto.UserDTO;
import com.NKThang.WorkflowManagement.service.impl.AuthenticationImpl;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/auth")
public class AuthController {
    private final AuthenticationImpl authentication;
    private static final Logger logger = LoggerFactory.getLogger(AuthController.class);

    public AuthController(AuthenticationImpl authentication) {
        this.authentication = authentication;
    }

    @PostMapping("/login")
    public Response<AuthResponse> login (@RequestBody LoginRequest login){
        Response<AuthResponse> response = authentication.login(login);
        return response;

    }
    @PostMapping("/register")
    public Response<UserDTO> register (@RequestBody RegisterRequest request){
        Response<UserDTO> response = authentication.register(request);
        return response;

    }

}
