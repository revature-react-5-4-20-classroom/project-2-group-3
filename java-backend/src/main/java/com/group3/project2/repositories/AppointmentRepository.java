package com.group3.project2.repositories;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import com.group3.project2.models.Appointment;
import com.group3.project2.models.Patient;

public interface AppointmentRepository extends JpaRepository<Appointment, Integer> {
  
  

  
  @Query("select u from Appointment u where u.patient.patientId=:id")
  List<Appointment> findByPatientIdJ(Integer id);
  
  

}
