package com.NKThang.WorkflowManagement.payload.response;

import com.NKThang.WorkflowManagement.service.dto.UserDTO;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@Builder(setterPrefix = "set")
public class AuthResponse {
    private String accessToken;
    @Builder.Default
    private String tokenType = "Bearer";
    private UserDTO userDTO;
}