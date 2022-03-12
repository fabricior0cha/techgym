package com.fabricio.gymtech.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import com.fabricio.gymtech.dtos.TrainerDTO;
import com.fabricio.gymtech.entities.Trainer;
import com.fabricio.gymtech.repositories.TrainerRepository;

@Service
public class TrainerService {

	@Autowired
	private TrainerRepository repository;
	
	public Trainer findById(Long id) {
		Optional<Trainer> trainer = repository.findById(id);
		return trainer.orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND));
	}
	
	public List<Trainer> findAll(){
		return repository.findAll();
	}
	
	public Trainer insert(Trainer trainer) {
		Trainer obj  = repository.findByEmail(trainer.getEmail());
		if(obj == null) {
			BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
			trainer.setPassword(encoder.encode(trainer.getPassword()));
			return repository.save(trainer);
		}
		else {
			throw new ResponseStatusException(HttpStatus.BAD_REQUEST);
		}
		
	}
	
	public Trainer login (TrainerDTO trainer) {
		BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
		Trainer obj  = repository.findByEmail(trainer.getEmail());
		if(obj != null) {
			if(encoder.matches(trainer.getPassword(), obj.getPassword())) {
				return obj;
			}
			else {
				throw new ResponseStatusException(HttpStatus.BAD_REQUEST);
			}
		} else {
			throw new ResponseStatusException(HttpStatus.BAD_REQUEST);
		}
		
		
	}
	
	
	
}
