package com.fabricio.gymtech.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.fabricio.gymtech.entities.Trainer;

public interface TrainerRepository extends JpaRepository<Trainer, Long>{

	Trainer findByEmail(String name);

}
