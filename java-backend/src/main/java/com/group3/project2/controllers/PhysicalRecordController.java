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
import com.group3.project2.exceptions.PhysicalRecordNotFoundException;
import com.group3.project2.models.PhysicalRecord;
import com.group3.project2.services.PhysicalRecordService;

@RequestMapping(path = "/physicals")
@RestController
public class PhysicalRecordController {
  
  @Autowired
  PhysicalRecordService physicalRecordService;
  /*
  @GetMapping
  public List<PhysicalRecord> getAllPhysicalRecords() {
    return physicalRecordService.getAll();
  }
  
  @GetMapping("/{id}")
  public PhysicalRecord getPhysicalRecordById(@PathVariable Integer id) {
    try {
      return physicalRecordService.getById(id);
    }catch(PhysicalRecordNotFoundException e) {
      throw new ResponseStatusException(HttpStatus.NOT_FOUND);
    }
  }
  
  @PostMapping
  public PhysicalRecord createPhysicalRecord(@RequestBody PhysicalRecord physicalRecord) {
    return physicalRecordService.create(physicalRecord);
  }

  @PostMapping("/{id}")
  public PhysicalRecord updatePhysicalRecordWithId(@RequestBody PhysicalRecord physicalRecord,@PathVariable Integer id) {
    physicalRecord.setPhysicalRecordId(id);
    return physicalRecordService.update(physicalRecord);
  }
  */
}
