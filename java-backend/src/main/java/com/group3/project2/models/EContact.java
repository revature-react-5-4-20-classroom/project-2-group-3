package com.group3.project2.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(schema = "projecttwo", name = "emergency")
public class EContact {
  
  @Id
  @Column(name = "id")
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Integer eContactId;
  
  @Column(name = "name")
  private String name;
  
  @Column(name = "address")
  private String address;
  
  @Column(name = "phone")
  private String phone;
  
  @Column(name = "relation")
  private String relation;
  
  @JoinColumn(name = "patient_id")
  @ManyToOne(fetch = FetchType.EAGER)
  private Integer patientId;
  
  public EContact() {
    super();
  }

  public EContact(Integer eContactId, String name, String address, String phone, String relation,
      Integer patientId) {
    super();
    this.eContactId = eContactId;
    this.name = name;
    this.address = address;
    this.phone = phone;
    this.relation = relation;
    this.patientId = patientId;
  }

  public String getName() {
    return name;
  }

  public void setName(String name) {
    this.name = name;
  }

  public String getAddress() {
    return address;
  }

  public void setAddress(String address) {
    this.address = address;
  }

  public String getPhone() {
    return phone;
  }

  public void setPhone(String phone) {
    this.phone = phone;
  }

  public String getRelation() {
    return relation;
  }

  public void setRelation(String relation) {
    this.relation = relation;
  }

  public Integer getPatientId() {
    return patientId;
  }

  public void setPatientId(Integer patientId) {
    this.patientId = patientId;
  }

  public Integer geteContactId() {
    return eContactId;
  }
  public void seteContactId(Integer eContactId) {
    this.eContactId = eContactId;
  }

  @Override
  public String toString() {
    return "EContact [eContactId=" + eContactId + ", name=" + name + ", address=" + address
        + ", phone=" + phone + ", relation=" + relation + ", patientId=" + patientId + "]";
  }
}

