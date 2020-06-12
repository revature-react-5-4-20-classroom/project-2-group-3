package com.group3.project2.services;

import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.group3.project2.exceptions.PhysicalRecordNotFoundException;
import com.group3.project2.models.PhysicalRecord;
import com.group3.project2.repositories.PhysicalRecordRepository;

@Service
public class PhysicalRecordService {
  
  @Autowired
  PhysicalRecordRepository physicalRecordRepository;
  /*
  public List<PhysicalRecord> getAll() {
    return physicalRecordRepository.findAll();
  }
  
  public PhysicalRecord getById(Integer id) {
    Optional<PhysicalRecord> physicalRecord = physicalRecordRepository.findById(id);
    if(physicalRecord.isPresent()) {
      return physicalRecord.get();
    }else {
      throw new PhysicalRecordNotFoundException();
    }
  }

  public PhysicalRecord create(PhysicalRecord physicalRecord) {
    physicalRecord.setPhysicalRecordId(0);
    return physicalRecordRepository.save(physicalRecord);
  }

  public PhysicalRecord update(PhysicalRecord physicalRecord) {
    Optional<PhysicalRecord> existingPhysicalRecord = physicalRecordRepository.findById(physicalRecord.getPhysicalRecordId());
    if(existingPhysicalRecord.isPresent()) {
      return physicalRecordRepository.save(physicalRecord);
    }else {
      throw new PhysicalRecordNotFoundException();
    }
  }
  */
}
