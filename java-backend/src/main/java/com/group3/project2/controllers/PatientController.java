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
import com.group3.project2.exceptions.PatientNotFoundException;
import com.group3.project2.models.Patient;
import com.group3.project2.services.PatientService;

@RequestMapping(path = "/patients")
@RestController
public class PatientController {
  
  @Autowired
  PatientService patientService;
  
  @GetMapping
  public List<Patient> getAllPatients() {
    return patientService.getAll();
  }
  
  @GetMapping("/{id}")
  public Patient getPatientById(@PathVariable Integer id) {
    try {
      return patientService.getById(id);
    }catch(PatientNotFoundException e) {
      throw new ResponseStatusException(HttpStatus.NOT_FOUND);
    }
  }
  
  @PostMapping
  public Patient createPatient(@RequestBody Patient patient) {
    return patientService.create(patient);
  }

  @PostMapping("/{id}")
  public Patient updatePatientWithId(@RequestBody Patient patient,@PathVariable Integer id) {
    patient.setPatientId(id);
    return patientService.update(patient);
  }
}

