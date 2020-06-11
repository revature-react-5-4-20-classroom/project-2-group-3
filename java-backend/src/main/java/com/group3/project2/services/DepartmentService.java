package com.group3.project2.services;

import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.group3.project2.exceptions.DepartmentNotFoundException;
import com.group3.project2.models.Department;
import com.group3.project2.repositories.DepartmentRepository;

@Service
public class DepartmentService {
  
  @Autowired
  DepartmentRepository departmentRepository;
  
  public List<Department> getAll() {
    return departmentRepository.findAll();
  }
  
  public Department getById(Integer id) {
    Optional<Department> department = departmentRepository.findById(id);
    if(department.isPresent()) {
      return department.get();
    }else {
      throw new DepartmentNotFoundException();
    }
  }
}
