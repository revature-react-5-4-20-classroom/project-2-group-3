package com.group3.project2.services;

import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.group3.project2.exceptions.PhysicalRecordAlreadyExists;
import com.group3.project2.exceptions.PhysicalRecordNotFoundException;
import com.group3.project2.models.Appointment;
import com.group3.project2.models.Patient;
import com.group3.project2.models.PhysicalRecord;
import com.group3.project2.repositories.PatientRepository;
import com.group3.project2.repositories.PhysicalRecordRepository;

@Service
public class PhysicalRecordService {
  
  @Autowired
  PhysicalRecordRepository physicalRecordRepository;
  
  @Autowired
  PatientService patientService;
  
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
	Optional<PhysicalRecord> existingPhysical = physicalRecordRepository.findById(physicalRecord.getAppointmentId());
	if(existingPhysical.isPresent()) {
		throw new PhysicalRecordAlreadyExists();
	}else {
	Appointment appointment = physicalRecord.getAppointment();
	System.out.println(appointment);
	physicalRecord.setAppointmentId(appointment.getAppointmentId());
	System.out.println(physicalRecord);
	Patient patient = appointment.getPatient();
	patient.setLastRecord(physicalRecord);
	PhysicalRecord newPhysicalRecord = physicalRecordRepository.save(physicalRecord);
	patientService.update(patient);
    return newPhysicalRecord;
	}
	
  }

  public PhysicalRecord update(PhysicalRecord physicalRecord) {
    Optional<PhysicalRecord> existingPhysicalRecord = physicalRecordRepository.findById(physicalRecord.getAppointmentId());
    if(existingPhysicalRecord.isPresent()) {
      return physicalRecordRepository.save(physicalRecord);
    }else {
      throw new PhysicalRecordNotFoundException();
    }
  }
  
}
