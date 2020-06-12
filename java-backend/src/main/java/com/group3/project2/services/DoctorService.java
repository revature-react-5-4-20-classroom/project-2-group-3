package com.group3.project2.services;

import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.group3.project2.exceptions.DoctorNotFoundException;
import com.group3.project2.models.Doctor;
import com.group3.project2.repositories.DoctorRepository;

@Service
public class DoctorService {
  
  @Autowired
  DoctorRepository doctorRepository;
  
  public List<Doctor> getAll(){
    return doctorRepository.findAll();
  }
  
  public Doctor getById(Integer id) {
    Optional<Doctor> doctor = doctorRepository.findById(id);
    if(doctor.isPresent()) {
      return doctor.get();
    }else {
      throw new DoctorNotFoundException();
    }
  }
  
  public Doctor create(Doctor doctor) {
    doctor.setDoctorId(0);
    return doctorRepository.save(doctor);
  }
  
  public Doctor update(Doctor doctor) {
    Optional<Doctor> existingDoctor = doctorRepository.findById(doctor.getDoctorId());
    if(existingDoctor.isPresent()) {
      return doctorRepository.save(doctor);
    }else {
      throw new DoctorNotFoundException();
    }
  }
}
