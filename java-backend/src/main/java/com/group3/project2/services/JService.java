package com.group3.project2.services;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.group3.project2.models.Appointment;
import com.group3.project2.models.Patient;
import com.group3.project2.repositories.AppointmentRepository;

@Service
public class JService {
  
  @Autowired
  AppointmentRepository appointmentRepository;
  
  
  //JJ to get appointment by patient id
  
  public List<Appointment> getByPatientJ(Integer id){
    return appointmentRepository.findByPatientIdJ(id);
    
  }

}
