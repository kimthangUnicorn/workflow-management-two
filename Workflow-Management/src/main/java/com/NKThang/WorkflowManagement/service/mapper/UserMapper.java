package com.NKThang.WorkflowManagement.service.mapper;

import com.NKThang.WorkflowManagement.domain.Role;
import com.NKThang.WorkflowManagement.domain.User;
import com.NKThang.WorkflowManagement.repository.RoleRepository;
import com.NKThang.WorkflowManagement.service.dto.UserDTO;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Set;
import java.util.stream.Collectors;

@Service
public class UserMapper {
    @Autowired
    private ModelMapper modelMapper;
    private final RoleRepository roleRepository;

    public UserMapper(ModelMapper modelMapper, RoleRepository roleRepository) {
        this.modelMapper = modelMapper;
        this.roleRepository = roleRepository;
    }

    public User convertToEntity(UserDTO userDTO) {
        User user = modelMapper.map(userDTO, User.class);
        if (userDTO.getRoles() != null) {
            Set<Role> roles = userDTO.getRoles().stream()
                    .map(roleName -> roleRepository.findRoleByName(roleName)
                            .orElseThrow(() -> new RuntimeException("Role not found: " + roleName)))
                    .collect(Collectors.toSet());
            user.setRoles(roles);
        }
        return user;
    }

    public UserDTO convertToDTO(User user) {
        UserDTO userDTO = modelMapper.map(user, UserDTO.class);
        if (user.getRoles() != null) {
            Set<String> roles = user.getRoles().stream()
                    .map(Role::getName)
                    .collect(Collectors.toSet());
            userDTO.setRoles(roles);
        }
        return userDTO;
    }
}
