package com.fabricio.gymtech.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.fabricio.gymtech.entities.Client;

public interface ClientRepository extends JpaRepository<Client, Long>{
	Client findByEmail(String name);
}
