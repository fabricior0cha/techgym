package com.fabricio.gymtech.resources;

import java.net.URI;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.fabricio.gymtech.dtos.TrainerDTO;
import com.fabricio.gymtech.entities.Trainer;
import com.fabricio.gymtech.services.TrainerService;

@RestController
@RequestMapping(value = "/trainers")
public class TrainerResources {

	@Autowired
	private TrainerService service;
	
	@GetMapping
	public ResponseEntity<List<Trainer>> findAll(){
		List<Trainer> trainers = service.findAll();
		return ResponseEntity.ok().body(trainers);
	}
	
	@GetMapping(value = "/{id}")
	public ResponseEntity<Trainer> findById(@PathVariable(value = "id") Long id){
		return ResponseEntity.ok().body(service.findById(id));
	}
	
	@PostMapping
	public ResponseEntity<Trainer> insert (@RequestBody Trainer trainer){
		trainer = service.insert(trainer);
		URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(trainer.getId()).toUri();
		return ResponseEntity.created(uri).body(trainer);
	}
	
	@PutMapping
	public ResponseEntity<Trainer> login (@RequestBody TrainerDTO trainer){
		Trainer obj = service.login(trainer);
		return ResponseEntity.ok().body(obj);
	}
}
