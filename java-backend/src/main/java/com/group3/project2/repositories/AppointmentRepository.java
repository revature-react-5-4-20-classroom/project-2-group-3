package com.group3.project2.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import com.group3.project2.models.Appointment;

public interface AppointmentRepository extends JpaRepository<Appointment, Integer> {

}
