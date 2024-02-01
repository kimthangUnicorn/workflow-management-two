package com.NKThang.WorkflowManagement.payload.request.auth;

import com.NKThang.WorkflowManagement.service.dto.UserDTO;

public class RegisterRequest {
    private UserDTO user;
    private String role;

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }

    public UserDTO getUser() {
        return user;
    }

    public void setUser(UserDTO user) {
        this.user = user;
    }
}
