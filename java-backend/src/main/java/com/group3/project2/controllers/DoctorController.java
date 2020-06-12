package com.group3.project2.controllers;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;
import com.group3.project2.exceptions.DoctorNotFoundException;
import com.group3.project2.models.Doctor;
import com.group3.project2.services.DoctorService;

@RequestMapping("/doctors")
@RestController
public class DoctorController {
  
  @Autowired
  DoctorService doctorRepository;
  
  @GetMapping
  public List<Doctor> getAllDoctors() {
    return doctorRepository.getAll();
  } 
  
  @GetMapping("/{id}")
  public Doctor getDoctorById(@PathVariable Integer id) {
    try {
      return doctorRepository.getById(id);
    }catch(DoctorNotFoundException e) {
      throw new ResponseStatusException(HttpStatus.NOT_FOUND);
    }
  }
  
  @PostMapping
  public Doctor createDoctor(@RequestBody Doctor doctor) {
    return doctorRepository.create(doctor);
  }
  
  @PostMapping("/{id}")
  public Doctor updateDoctorWithId(@RequestBody Doctor doctor,@PathVariable Integer id) {
    doctor.setDoctorId(id);
    return doctorRepository.update(doctor);
  }
}
