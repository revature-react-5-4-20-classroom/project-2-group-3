package com.group3.project2.repositories;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import com.group3.project2.models.Patient;

@Repository
public interface PatientRepository extends JpaRepository<Patient, Integer>{
  
  
  
  @Query("select u from Patient u where u.username = :username and u.password = :password")
  List<Patient> findByUsernameAndPassword(String username,String password);
  
  @Query(value = "select u.* from projecttwo.patient u, projecttwo.physicalrecord r, projecttwo.appointment a"
      + " where (u.notificationarn IS NOT NULL) AND"
      + " (u.last_record = r.appointment_id) AND"
      + " (r.appointment_id = a.id) AND"
      + " (a.date_slot < CURRENT_DATE - INTERVAL '3 months')", nativeQuery = true)
  List<Patient> getUsersWithARNAndNoRecentAppointments();

}