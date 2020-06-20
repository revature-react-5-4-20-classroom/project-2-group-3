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
import com.group3.project2.exceptions.EContactNotFoundException;
import com.group3.project2.models.EContact;
import com.group3.project2.models.EContact;
import com.group3.project2.services.EContactService;

@RequestMapping(path = "/econtacts")
@RestController
public class EContactController {
  
  @Autowired
  EContactService eContactService;
  
  @GetMapping
  public List<EContact> getAllEContacts() {
    return eContactService.getAll();
  }
  
  @GetMapping("/{id}")
  public EContact getEContactById(@PathVariable Integer id) {
    try {
      return eContactService.getById(id);
    }catch(EContactNotFoundException e) {
      throw new ResponseStatusException(HttpStatus.NOT_FOUND);
    }
  }
  
  @PostMapping
  public EContact createEContact(@RequestBody EContact eContact) {
    return eContactService.create(eContact);
  }

  @PostMapping("/{id}")
  public EContact updateEContactWithId(@RequestBody EContact eContact,@PathVariable Integer id) {
    eContact.seteContactId(id);
    return eContactService.update(eContact);
  }
}
