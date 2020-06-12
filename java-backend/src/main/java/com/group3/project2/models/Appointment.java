package com.group3.project2.models;

import java.sql.Date;
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
@Table(schema = "projecttwo", name = "appointment")
public class Appointment {
  
  @Id
  @Column(name = "id")
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Integer appointmentId;
  
  @Column(name = "details")
  private String details;
  
  @Column(name = "date_slot")
  private Date dateSlot;
  
  @Column(name = "time_slot")
  private Integer timeSlot;
  
  @JoinColumn(name = "doctor_id")
  @ManyToOne(fetch = FetchType.EAGER)
  private Doctor doctor;
  
  @JoinColumn(name = "patient_id")
  @ManyToOne(fetch = FetchType.EAGER)
  private Patient patient;
  
  @JoinColumn(name = "status")
  @ManyToOne(fetch = FetchType.EAGER)
  private AppointmentStatus status;
  
  @JoinColumn(name = "type")
  @ManyToOne(fetch = FetchType.EAGER)
  private AppointmentType type;
  
  public Appointment() {
    super();
  }

  public Appointment(Integer appointmentId, String details, Date dateSlot, Integer timeSlot,
      Doctor doctor, Patient patient, AppointmentStatus status, AppointmentType type) {
    super();
    this.appointmentId = appointmentId;
    this.details = details;
    this.dateSlot = dateSlot;
    this.timeSlot = timeSlot;
    this.doctor = doctor;
    this.patient = patient;
    this.status = status;
    this.type = type;
  }

  public Integer getAppointmentId() {
    return appointmentId;
  }

  public void setAppointmentId(Integer appointmentId) {
    this.appointmentId = appointmentId;
  }

  public String getDetails() {
    return details;
  }

  public void setDetails(String details) {
    this.details = details;
  }

  public Date getDateSlot() {
    return dateSlot;
  }

  public void setDateSlot(Date dateSlot) {
    this.dateSlot = dateSlot;
  }

  public Integer getTimeSlot() {
    return timeSlot;
  }

  public void setTimeSlot(Integer timeSlot) {
    this.timeSlot = timeSlot;
  }

  public Doctor getDoctor() {
    return doctor;
  }

  public void setDoctor(Doctor doctor) {
    this.doctor = doctor;
  }

  public Patient getPatient() {
    return patient;
  }

  public void setPatient(Patient patient) {
    this.patient = patient;
  }

  public AppointmentStatus getStatus() {
    return status;
  }

  public void setStatus(AppointmentStatus status) {
    this.status = status;
  }

  public AppointmentType getType() {
    return type;
  }

  public void setType(AppointmentType type) {
    this.type = type;
  }

  @Override
  public String toString() {
    return "Appointment [appointmentId=" + appointmentId + ", details=" + details + ", dateSlot="
        + dateSlot + ", timeSlot=" + timeSlot + ", doctor=" + doctor + ", status=" + status
        + ", type=" + type + "]";
  }
  
  
}
