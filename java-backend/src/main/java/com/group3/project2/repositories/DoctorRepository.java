package com.group3.project2.repositories;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import com.group3.project2.models.Doctor;

public interface DoctorRepository extends JpaRepository<Doctor, Integer> {
  
  
  

  @Query("select u from Doctor u where u.username = :username and u.password = :password")
  List<Doctor> findByUsernameAndPassword(String username,String password);

}
