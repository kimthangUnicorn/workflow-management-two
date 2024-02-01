package com.NKThang.WorkflowManagement.service.impl;

import com.NKThang.WorkflowManagement.domain.Role;
import com.NKThang.WorkflowManagement.domain.User;
import com.NKThang.WorkflowManagement.payload.request.auth.LoginRequest;
import com.NKThang.WorkflowManagement.payload.request.auth.RegisterRequest;
import com.NKThang.WorkflowManagement.payload.response.AuthResponse;
import com.NKThang.WorkflowManagement.payload.response.Response;
import com.NKThang.WorkflowManagement.repository.RoleRepository;
import com.NKThang.WorkflowManagement.repository.UserRepository;
import com.NKThang.WorkflowManagement.security.JwtTokenProvider;
import com.NKThang.WorkflowManagement.service.AuthenIService;
import com.NKThang.WorkflowManagement.service.dto.UserDTO;
import com.NKThang.WorkflowManagement.service.mapper.UserMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.*;
import java.util.stream.Collectors;

@Service
public class AuthenticationImpl implements AuthenIService {
    private static final Logger logger = LoggerFactory.getLogger(AuthenticationImpl.class);
    private final UserRepository userRepository;
    private final RoleRepository roleRepository;

    private final AuthenticationManager authManager;
    private final PasswordEncoder passwordEncoder;
    private final UserMapper userMapper;
    private final JwtTokenProvider jwtTokenProvider;
    public AuthenticationImpl(UserRepository userRepository, RoleRepository roleRepository, AuthenticationManager authManager, PasswordEncoder passwordEncoder, UserMapper userMapper, JwtTokenProvider jwtTokenProvider) {
        this.userRepository = userRepository;
        this.roleRepository = roleRepository;
        this.authManager = authManager;
        this.passwordEncoder = passwordEncoder;
        this.userMapper = userMapper;
        this.jwtTokenProvider = jwtTokenProvider;
    }

    @Override
    public Response<AuthResponse> login(LoginRequest request) {
        PasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
        User user = userRepository.findByEmail(request.getEmail()).orElse(null);
        if(user == null){
            return Response.<AuthResponse>builder()
                    .setMessage("Email không tồn tại")
                    .setStatus(HttpStatus.BAD_REQUEST)
                    .setSuccess(false)
                    .setStatusCode(400)
                    .build();
        }
        if(!passwordEncoder.matches(request.getPassword().trim(), user.getPassword())){
            return Response.<AuthResponse>builder()
                    .setMessage("Mật khẩu không chính xác")
                    .setStatus(HttpStatus.BAD_REQUEST)
                    .setSuccess(false)
                    .setStatusCode(400)
                    .build();
        }
        try {
            authManager.authenticate(new UsernamePasswordAuthenticationToken(
                    request.getEmail(), request.getPassword()
            ));
        } catch (AuthenticationException e) {
            return Response.<AuthResponse>builder()
                    .setMessage("Xác thực không thành công")
                    .setStatus(HttpStatus.UNAUTHORIZED)
                    .setSuccess(false)
                    .setStatusCode(401)
                    .build();
        }
        String accessToken = jwtTokenProvider.generateToken(user);
        UserDTO userDTO = userMapper.convertToDTO(user);
        userDTO.setPassword(null);
        return Response.<AuthResponse>builder()
                .setMessage("Login successful")
                .setData(AuthResponse.builder()
                        .setAccessToken(accessToken)
                        .setUserDTO(userDTO)
                        .build())
                .build();
    }

    @Override
    public Response<UserDTO> register(RegisterRequest request) {
        if (userRepository.findByEmail(request.getUser().getEmail()).isPresent()) {
            return Response.<UserDTO>builder()
                    .setMessage("Email đã tồn tại")
                    .setStatus(HttpStatus.BAD_REQUEST)
                    .setSuccess(false)
                    .setStatusCode(400)
                    .build();
        }
        User user = new User();
        user.setEmail(request.getUser().getEmail());
        user.setFullname(request.getUser().getFullname());
        user.setPassword(passwordEncoder.encode(request.getUser().getPassword().trim()));
        user.setPhone(request.getUser().getPhone());
        Role userRole = roleRepository.findRoleByName(request.getRole())
                .orElseThrow(() -> new RuntimeException("Vai trò không tồn tại"));
        user.setRoles(Collections.singleton(userRole));
        userRepository.save(user);
        UserDTO userDTO = userMapper.convertToDTO(user);
        userDTO.setPassword(null);
        return Response.<UserDTO>builder()
                .setData(userDTO)
                .setMessage("Đăng ký thành công")
                .setStatus(HttpStatus.OK)
                .setSuccess(true)
                .setStatusCode(200)
                .build();
    }
}
