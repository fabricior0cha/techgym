package com.fabricio.gymtech.resources;

import java.net.URI;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.fabricio.gymtech.dtos.SchedulingDTO;
import com.fabricio.gymtech.entities.Scheduling;
import com.fabricio.gymtech.services.SchedulingService;

@RestController
@RequestMapping(value = "/schedulings")
public class SchedulingResources {

	@Autowired
	private SchedulingService service;
	

	@GetMapping
	public ResponseEntity<List<Scheduling>> findAll(){
		List<Scheduling> schedulings = service.findAll();
		return ResponseEntity.ok().body(schedulings);
	}
	
	
	@PostMapping
	public ResponseEntity<Scheduling> insert (@RequestBody SchedulingDTO dto){
		Scheduling scheduling = service.insert(dto);
		URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(scheduling.getId()).toUri();
		return ResponseEntity.created(uri).body(scheduling);
	}
	
	@DeleteMapping("/{id}")
	public ResponseEntity<Void> delete(@PathVariable Long id){
		service.delete(id);
		return ResponseEntity.noContent().build();
	}
	

}
