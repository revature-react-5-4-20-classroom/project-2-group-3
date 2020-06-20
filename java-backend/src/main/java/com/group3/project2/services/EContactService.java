package com.group3.project2.services;

import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.group3.project2.exceptions.EContactNotFoundException;
import com.group3.project2.models.EContact;
import com.group3.project2.repositories.EContactRepository;

@Service
public class EContactService {
  
  @Autowired
  EContactRepository eContactRepository;
  
  public List<EContact> getAll() {
    return eContactRepository.findAll();
  }
  
  public EContact getById(Integer id) {
    Optional<EContact> eContact = eContactRepository.findById(id);
    if(eContact.isPresent()) {
      return eContact.get();
    }else {
      throw new EContactNotFoundException();
    }
  }
  
  public EContact create(EContact eContact) {
    eContact.seteContactId(0);
    return eContactRepository.save(eContact);
  }

  public EContact update(EContact eContact) {
    Optional<EContact> existingEContact = eContactRepository.findById(eContact.geteContactId());
    if(existingEContact.isPresent()) {
      return eContactRepository.save(eContact);
    }else {
      throw new EContactNotFoundException();
    }
  }
  
  public List<EContact> getByPatientJ(Integer patientId){
    List <EContact> eContact=eContactRepository.findByPatientIdJ(patientId);
    return eContact;
    
  }
  
}
