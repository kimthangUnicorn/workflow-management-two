package com.NKThang.WorkflowManagement.service;

import com.NKThang.WorkflowManagement.payload.request.auth.LoginRequest;
import com.NKThang.WorkflowManagement.payload.request.auth.RegisterRequest;
import com.NKThang.WorkflowManagement.payload.response.AuthResponse;
import com.NKThang.WorkflowManagement.payload.response.Response;
import com.NKThang.WorkflowManagement.service.dto.UserDTO;

public interface AuthenIService {
    public Response<AuthResponse> login(LoginRequest request);

    public Response<UserDTO> register(RegisterRequest request);
}
