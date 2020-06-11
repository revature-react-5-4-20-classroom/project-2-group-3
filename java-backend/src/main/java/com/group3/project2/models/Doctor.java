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
@Table(schema = "projecttwo", name = "doctor")
public class Doctor {
  
  @Id
  @Column(name = "id")
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Integer doctorId;
  
  @Column(name = "first_name")
  private String firstName;
  
  @Column(name = "last_name")
  private String lastName;
  
  @Column(name = "speciality")
  private String speciality;
  
  @JoinColumn(name = "department_id")
  @ManyToOne(fetch = FetchType.EAGER)
  private Department department;
  
  public Doctor() {
    super();
  }

  public Doctor(Integer doctorId, String firstName, String lastName, String speciality,
      Department department) {
    super();
    this.doctorId = doctorId;
    this.firstName = firstName;
    this.lastName = lastName;
    this.speciality = speciality;
    this.department = department;
  }

  public Integer getDoctorId() {
    return doctorId;
  }

  public void setDoctorId(Integer doctorId) {
    this.doctorId = doctorId;
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

  public String getSpeciality() {
    return speciality;
  }

  public void setSpeciality(String speciality) {
    this.speciality = speciality;
  }

  public Department getDepartment() {
    return department;
  }

  public void setDepartment(Department department) {
    this.department = department;
  }

  @Override
  public String toString() {
    return "Doctor [doctorId=" + doctorId + ", firstName=" + firstName + ", lastName=" + lastName
        + ", speciality=" + speciality + ", department=" + department + "]";
  }
  
  
  
}
