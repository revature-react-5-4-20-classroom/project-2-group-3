package com.group3.project2.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.group3.project2.models.PhysicalRecord;

@Repository
public interface PhysicalRecordRepository extends JpaRepository<PhysicalRecord, Integer>{

}
