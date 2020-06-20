package com.group3.project2.controllers;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;
import com.group3.project2.exceptions.AppointmentNotFoundException;
import com.group3.project2.models.Appointment;
import com.group3.project2.models.EContact;
import com.group3.project2.services.EContactService;
import com.group3.project2.services.JService;
@RestController
public class JController {
  
  @Autowired
  JService jservice;
  
  @Autowired
  EContactService econtactService;
  
  
  @GetMapping("appointments/patient/{id}")
  public List<Appointment> getAppointmentByPatientId(@PathVariable Integer id){
    
    try {
      List<Appointment> appointments=jservice.getByPatientJ(id);
      return appointments;
      
      
    }catch(AppointmentNotFoundException e) {
      throw new ResponseStatusException(HttpStatus.NOT_FOUND);
    }
    
  }
  
  
  @GetMapping("econtacts/patient/{id}")
  public List<EContact> getEContactByPatientId(@PathVariable Integer id){
    try {
      List<EContact> econtacts=econtactService.getByPatientJ(id);
      return econtacts;
    }catch(Exception e) {
      throw new ResponseStatusException(HttpStatus.NOT_FOUND);
      
    }
    
  }
  

}
