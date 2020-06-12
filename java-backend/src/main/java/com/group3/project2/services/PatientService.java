package com.group3.project2.services;

import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.group3.project2.exceptions.PatientNotFoundException;
import com.group3.project2.models.Patient;
import com.group3.project2.repositories.PatientRepository;

@Service
public class PatientService {
  
  @Autowired
  PatientRepository patientRepository;
  
  public List<Patient> getAll() {
    return patientRepository.findAll();
  }
  
  public Patient getById(Integer id) {
    Optional<Patient> patient = patientRepository.findById(id);
    if(patient.isPresent()) {
      return patient.get();
    }else {
      throw new PatientNotFoundException();
    }
  }

  public Patient create(Patient patient) {
    patient.setPatientId(0);
    return patientRepository.save(patient);
  }

  public Patient update(Patient patient) {
    Optional<Patient> existingPatient = patientRepository.findById(patient.getPatientId());
    if(existingPatient.isPresent()) {
      return patientRepository.save(patient);
    }else {
      throw new PatientNotFoundException();
    }
  }
}
