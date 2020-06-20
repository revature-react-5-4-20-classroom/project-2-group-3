package com.group3.project2.models;

import java.util.List;
import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(schema = "projecttwo", name = "department")
public class Department {
  
  @Id
  @Column(name = "id")
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Integer id;
  
  @Column(name = "name")
  private String departmentName;
  
  @OneToMany(mappedBy = "department")
  @JsonIgnoreProperties({"department"})
  private List<Doctor> doctors;
  
  public Department() {
    super();
  }

   
  public Department(Integer id, String departmentName) {
    super();
    this.id = id;
    this.departmentName = departmentName;
  }


  public Integer getId() {
    return id;
  }

  public void setId(Integer id) {
    this.id = id;
  }

  public String getDepartmentName() {
    return departmentName;
  }

  public void setDepartmentName(String departmentName) {
    this.departmentName = departmentName;
  }

  public List<Doctor> getDoctors() {
    return this.doctors;
  }
  
  public void setDoctors(List<Doctor> doctors) {
    this.doctors = doctors;
  }
  @Override
  public String toString() {
    return "Department [id=" + id + ", departmentName=" + departmentName + "]";
  }
 
  
}
