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
@Entity
@Table(schema = "projecttwo", name = "physicalrecord")
public class PhysicalRecord {
  
  @Id
  @Column(name = "id")
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  @JoinColumn(name = "appointmentId")
  @OneToOne(fetch = FetchType.EAGER)
  private Integer appointmentId;
  
  @Column(name = "height")
  private Double height;
  
  @Column(name = "weight")
  private Double weight;
  
  @Column(name = "age")
  private Integer age;
  
  @Column(name = "diagnosis")
  private String diagnosis;
  
  @Column(name = "prescribed_action")
  private String prescribedAction;
  
  @Column(name = "prescribed_medication")
  private String prescribedMedication;
  
  @Column(name = "notes")
  private String notes;

  public PhysicalRecord(Integer appointmentId, Double height, Double weight, Integer age,
      String diagnosis, String prescribedAction, String prescribedMedication, String notes) {
    super();
    this.appointmentId = appointmentId;
    this.height = height;
    this.weight = weight;
    this.age = age;
    this.diagnosis = diagnosis;
    this.prescribedAction = prescribedAction;
    this.prescribedMedication = prescribedMedication;
    this.notes = notes;
  }

  public PhysicalRecord() {
    super();
    // TODO Auto-generated constructor stub
  }

  public Integer getPhysicalRecordId() {
    return appointmentId;
  }

  public void setPhysicalRecordId(Integer appointmentId) {
    this.appointmentId = appointmentId;
  }

  public Double getHeight() {
    return height;
  }

  public void setHeight(Double height) {
    this.height = height;
  }

  public Double getWeight() {
    return weight;
  }

  public void setWeight(Double weight) {
    this.weight = weight;
  }

  public Integer getAge() {
    return age;
  }

  public void setAge(Integer age) {
    this.age = age;
  }

  public String getDiagnosis() {
    return diagnosis;
  }

  public void setDiagnosis(String diagnosis) {
    this.diagnosis = diagnosis;
  }

  public String getPrescribedAction() {
    return prescribedAction;
  }

  public void setPrescribedAction(String prescribedAction) {
    this.prescribedAction = prescribedAction;
  }

  public String getPrescribedMedication() {
    return prescribedMedication;
  }

  public void setPrescribedMedication(String prescribedMedication) {
    this.prescribedMedication = prescribedMedication;
  }

  public String getNotes() {
    return notes;
  }

  public void setNotes(String notes) {
    this.notes = notes;
  }

  @Override
  public String toString() {
    return "PhysicalRecord [appointmentId=" + appointmentId + ", height=" + height + ", weight="
        + weight + ", age=" + age + ", diagnosis=" + diagnosis + ", prescribedAction="
        + prescribedAction + ", prescribedMedication=" + prescribedMedication + ", notes=" + notes
        + "]";
  }
}
