package com.group3.project2.dtos;

import com.group3.project2.models.Patient;

public class Alert {
	
	private Patient patient;
	
	private String message;
	private String subject;
	public Patient getPatient() {
		return patient;
	}
	public void setPatient(Patient patient) {
		this.patient = patient;
		System.out.println("seeter");
		System.out.println(patient.getARN());
	}
	public String getMessage() {
		return message;
	}
	public void setMessage(String message) {
		this.message = message;
	}
	public String getSubject() {
		return subject;
	}
	public void setSubject(String subject) {
		this.subject = subject;
	}

}
