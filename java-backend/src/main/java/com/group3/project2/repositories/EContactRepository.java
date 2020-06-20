package com.group3.project2.repositories;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import com.group3.project2.models.EContact;
import com.group3.project2.models.Patient;

@Repository
public interface EContactRepository extends JpaRepository<EContact, Integer>{
  
  

  
  
  @Query("select c from EContact c where patientId.patientId=:patientId")
   List<EContact> findByPatientIdJ(Integer patientId);
  

}
