package com.group3.project2.services;

import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.group3.project2.exceptions.AppointmentNotFoundException;
import com.group3.project2.models.Appointment;
import com.group3.project2.models.Patient;
import com.group3.project2.repositories.AppointmentRepository;

@Service
public class AppointmentService {
  
  @Autowired
  AppointmentRepository appointmentRepository;
  
  public List<Appointment> getAll() {
    return appointmentRepository.findAll();
  }
  
  public Appointment getById(Integer id) {
    Optional<Appointment> app = appointmentRepository.findById(id);
    if(app.isPresent()) {
      return app.get();
    }else {
      throw new AppointmentNotFoundException();
    }
  }
  
  public Appointment create(Appointment app) {
    app.setAppointmentId(0);
//    System.out.println(app.getDateSlot());
    return appointmentRepository.save(app);
  }
  
  public Appointment update(Appointment app) {
    Optional<Appointment> existingApp = appointmentRepository.findById(app.getAppointmentId());
    if(existingApp.isPresent()) {
      return appointmentRepository.save(app);
    }else {
      throw new AppointmentNotFoundException();
    }
  }

}
