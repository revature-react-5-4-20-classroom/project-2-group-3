package com.group3.project2.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(schema = "projecttwo", name = "appointmenttype")
public class AppointmentType {
  
  @Id
  @Column(name = "id")
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Integer typeId;
  
  @Column(name = "type_name")
  private String typeName;
  
  public AppointmentType() {
    super();
  }
  
  
  public AppointmentType(Integer typeId, String typeName) {
    super();
    this.typeId = typeId;
    this.typeName = typeName;
  }


  public Integer getTypeId() {
    return typeId;
  }

  public void setTypeId(Integer typeId) {
    this.typeId = typeId;
  }

  public String getTypeName() {
    return typeName;
  }

  public void setTypeName(String typeName) {
    this.typeName = typeName;
  }


  @Override
  public String toString() {
    return "AppointmentType [typeId=" + typeId + ", typeName=" + typeName + "]";
  }
  
  
}
