package com.group3.project2.dtos;

import com.sun.istack.NotNull;
import lombok.Data;

@Data
public class Credentials {
  
  
  

  @NotNull
  private String username;
  @NotNull
  private String password;

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

}
