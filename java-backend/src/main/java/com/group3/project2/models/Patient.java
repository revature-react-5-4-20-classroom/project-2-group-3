package com.group3.project2.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import java.sql.Date;

@Entity
@Table(schema = "projecttwo", name = "patient")
public class Patient {
  
  @Id
  @Column(name = "id")
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Integer patientId;
  
  @JoinColumn(name = "record_id")
  @OneToOne(fetch = FetchType.EAGER)
  @Column(name = "last_record")
  private Integer lastRecord;
  
  @Column(name = "first_name")
  private String firstName;
  
  @Column(name = "last_name")
  private String lastName;
  
  @Column(name = "gender")
  private String gender;
  
  @Column(name = "username")
  private String username;
  
  @Column(name = "password")
  private String password;
  
  @Column(name = "birthdate")
  private Date birthDate;
  
  @Column(name = "address")
  private String address;
  
  @Column(name = "phone")
  private String phone;
  
  @Column(name = "email")
  private String email;
  
  public Patient() {
    super();
  }

  public Patient(Integer patientId, Integer lastrecord,String firstName, String lastName, String gender,
      String username, String password, Date birthdate, String address, String phone, String email) {
    super();
    this.patientId = patientId;
    this.lastRecord = lastrecord;
    this.firstName = firstName;
    this.lastName = lastName;
    this.gender = gender;
    this.username = username;
    this.password = password;
    this.birthDate = birthdate;
    this.address = address;
    this.phone = phone;
    this.email = email;
  }

  public Integer getPatientId() {
    return patientId;
  }
  
  public void setPatientId(Integer patientId) {
    this.patientId = patientId;
  }

  public Integer getLastRecord() {
    return lastRecord;
  }

  public void setLastRecord(Integer last_record) {
    this.lastRecord = last_record;
  }

  public String getFirstName() {
    return firstName;
  }

  public void setFirstName(String firstName) {
    this.firstName = firstName;
  }

  public String getLastName() {
    return lastName;
  }

  public void setLastName(String lastName) {
    this.lastName = lastName;
  }

  public String getGender() {
    return gender;
  }

  public void setGender(String gender) {
    this.gender = gender;
  }

  public String getUsername() {
    return username;
  }

  public void setUsername(String username) {
    this.username = username;
  }

  public String getPassword() {
    return password;
  }

  public void setPassword(String password) {
    this.password = password;
  }

  public Date getBirthDate() {
    return birthDate;
  }

  public void setBirthDate(Date birthDate) {
    this.birthDate = birthDate;
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

  public String getEmail() {
    return email;
  }

  public void setEmail(String email) {
    this.email = email;
  }

  @Override
  public String toString() {
    return "Patient [patientId=" + patientId + ", lastRecord=" + lastRecord + ", firstName="
        + firstName + ", lastName=" + lastName + ", gender=" + gender + ", username=" + username
        + ", password=" + password + ", birthDate=" + birthDate + ", address=" + address
        + ", phone=" + phone + ", email=" + email + "]";
  }
}
