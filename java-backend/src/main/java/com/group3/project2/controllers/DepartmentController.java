package com.group3.project2.controllers;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;
import com.group3.project2.exceptions.DepartmentNotFoundException;
import com.group3.project2.models.Department;
import com.group3.project2.services.DepartmentService;

@RequestMapping(path = "/departments")
@RestController
public class DepartmentController {
  
  @Autowired
  DepartmentService departmentService;
  
  @GetMapping
  public List<Department> getAllDepartments() {
    return departmentService.getAll();
  }
  
  @GetMapping("/{id}")
  public Department getDepartmentById(@PathVariable Integer id) {
    try {
      return departmentService.getById(id);
    }catch(DepartmentNotFoundException e) {
      throw new ResponseStatusException(HttpStatus.NOT_FOUND);
    }
  }
}
