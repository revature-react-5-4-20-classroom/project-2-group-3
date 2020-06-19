package com.group3.project2.controllers;

import java.util.List;
import javax.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;
import com.amazonaws.services.sns.model.PublishResult;
import com.group3.project2.dtos.Credentials;
import com.group3.project2.exceptions.PatientNotFoundException;
import com.group3.project2.models.Patient;
import com.group3.project2.services.NotificationService;
import com.group3.project2.services.PatientService;

@RequestMapping(path = "/patients")
@RestController
public class PatientController {
  
  @Autowired
  PatientService patientService;
  @Autowired
  NotificationService notificationService;
  
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
  @PostMapping("/login")
  public Patient attemptLogin(@RequestBody Credentials creds,HttpSession session) {
  
    try {
    Patient patient=patientService.checkCredentials(creds.getUsername(),creds.getPassword());
    return patient;
    }
    catch(PatientNotFoundException e) {
      throw new ResponseStatusException(HttpStatus.NOT_FOUND);
      
    }
  }
  
  
  //This is called for a NEW subscriber request. Ie, the Patient has a null field for notificationARN in db. 
  //This calls the notificationService to create a new topic with a name generated from the patients full name and patientId.
  //newTopic returns the new topic ARN (basically its AWS ID) 
  //Then it calls setSubscriber to have SNS send an email to the patient's email for AWS SNS alert confirmation.
  //Finally, this method updates the patient with the ARN for their new topic
  @PostMapping("/newSub")
  public Patient newSub(@RequestBody Patient patient) {
    String arn = notificationService.newTopic(patient.getFirstName()+patient.getLastName()+patient.getPatientId());
    notificationService.setSubscriber(arn, patient.getEmail());
    patient.setARN(arn);
    return patientService.update(patient);
  }
  
  //Takes a Patient as input for their ARN number, message will be the email body, subject is email subject header. 
  //The email for the patient will NOT receive this if it hasnt confirmed the initial SNS email. 
  @PostMapping("/newAlert")
  public PublishResult newAlert(@RequestBody Patient patient, String message, String subject) {
    return notificationService.publishNotification(patient.getARN(), message, subject);
  }
}

