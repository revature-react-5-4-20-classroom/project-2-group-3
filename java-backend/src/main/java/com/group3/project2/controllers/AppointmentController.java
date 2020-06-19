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
import com.group3.project2.exceptions.AppointmentNotFoundException;
import com.group3.project2.models.Appointment;
import com.group3.project2.services.AppointmentService;

@RequestMapping("/appointments")
@RestController
public class AppointmentController {
  
  @Autowired
  AppointmentService appointmentService;
  
  @GetMapping
  public List<Appointment> getAllAppointments(){
    return appointmentService.getAll();
  }
  
  @GetMapping("/{id}")
  public Appointment getAppointmentById(@PathVariable Integer id) {
    try {
      return appointmentService.getById(id);
    }catch(AppointmentNotFoundException e) {
      throw new ResponseStatusException(HttpStatus.NOT_FOUND);
    }
  }
  
  @PostMapping
  public Appointment createAppointment(@RequestBody Appointment app) {
    System.out.println(app.getDateSlot());
    return appointmentService.create(app);
  }
  
  @PostMapping("/{id}")
  public Appointment updateAppointment(@RequestBody Appointment app, @PathVariable Integer id) {
    app.setAppointmentId(id);
    return appointmentService.update(app);
  }
}
