package com.group3.project2.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(schema = "projecttwo", name = "appointmentstatus")
public class AppointmentStatus {
  
  @Id
  @Column(name = "id")
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Integer statusId;
  
  @Column(name = "status_name")
  private String statusName;

  public AppointmentStatus() {
    super();
  }
  
  public AppointmentStatus(Integer statusId, String statusName) {
    super();
    this.statusId = statusId;
    this.statusName = statusName;
  }

  public Integer getStatusId() {
    return statusId;
  }

  public void setStatusId(Integer statusId) {
    this.statusId = statusId;
  }

  public String getStatusName() {
    return statusName;
  }

  public void setStatusName(String statusName) {
    this.statusName = statusName;
  }

  @Override
  public String toString() {
    return "AppointmentStatus [statusId=" + statusId + ", statusName=" + statusName + "]";
  }
  
  
}
