package com.fabricio.gymtech.repositories;

import java.time.LocalDateTime;
import java.util.Date;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.fabricio.gymtech.entities.Scheduling;
import com.fabricio.gymtech.entities.Trainer;

public interface SchedulingRepository extends JpaRepository<Scheduling, Long>{

	Optional<Scheduling> findByTrainerAndDate(Trainer trainer, LocalDateTime date);
	
}
