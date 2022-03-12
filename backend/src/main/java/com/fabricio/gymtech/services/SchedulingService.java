package com.fabricio.gymtech.services;

import java.time.LocalDateTime;
import java.util.Calendar;
import java.util.Date;
import java.util.GregorianCalendar;
import java.util.List;
import java.util.Optional;
import java.util.TimeZone;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import com.fabricio.gymtech.dtos.SchedulingDTO;
import com.fabricio.gymtech.entities.Client;
import com.fabricio.gymtech.entities.Scheduling;
import com.fabricio.gymtech.entities.Trainer;
import com.fabricio.gymtech.repositories.ClientRepository;
import com.fabricio.gymtech.repositories.SchedulingRepository;
import com.fabricio.gymtech.repositories.TrainerRepository;

@Service
public class SchedulingService {


	
	@Autowired
	private SchedulingRepository repository;
	
	@Autowired
	private TrainerRepository trainerRepository;
	
	@Autowired
	private ClientRepository clientRepository;

	public Scheduling findById(Long id) {
		Optional<Scheduling> scheduling = repository.findById(id);
		return scheduling.orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND));
	}

	public List<Scheduling> findAll() {
		return repository.findAll();
	}

	
	public Scheduling insert(SchedulingDTO dto) {
		Trainer trainer = trainerRepository.findByEmail(dto.getTrainerEmail());
		Client client = clientRepository.findByEmail(dto.getClientEmail());
		TimeZone tz = TimeZone.getTimeZone("America/Sao_Paulo");
		TimeZone.setDefault(tz);
		
		
		Optional<Scheduling> obj = repository.findByTrainerAndDate(trainer, dto.getDate());
		if(obj.isEmpty()) {
			if(dto.getDate().isBefore(LocalDateTime.now())){
				throw new ResponseStatusException(HttpStatus.BAD_REQUEST);
			}
			else {
				Scheduling scheduling = new Scheduling();
				
				
				scheduling.setClient(client);
				scheduling.setTrainer(trainer);
				scheduling.setDate(dto.getDate());
				
				return repository.save(scheduling);
			}
		}
		else {
			throw new ResponseStatusException(HttpStatus.BAD_REQUEST);
		}
		
		
		
	}
	
	
	public void delete(Long id) {
		repository.deleteById(id);
	}


}
