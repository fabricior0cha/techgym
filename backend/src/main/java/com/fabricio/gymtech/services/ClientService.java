package com.fabricio.gymtech.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import com.fabricio.gymtech.dtos.ClientDTO;
import com.fabricio.gymtech.entities.Client;
import com.fabricio.gymtech.repositories.ClientRepository;

@Service
public class ClientService {

	@Autowired
	private ClientRepository repository;
	
	public Client findById(Long id) {
		Optional<Client> client = repository.findById(id);
		return client.orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND));
	}
	
	public List<Client> findAll(){
		return repository.findAll();
	}
	
	
	public Client insert(Client client) {
		Client obj  = repository.findByEmail(client.getEmail());
		if(obj == null) {
			BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
			client.setPassword(encoder.encode(client.getPassword()));
			return repository.save(client);
		}
		else {
			throw new ResponseStatusException(HttpStatus.BAD_REQUEST);
		}
		
	}
	
	public Client login (ClientDTO client) {
		BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
		Client obj  = repository.findByEmail(client.getEmail());
		if(obj != null) {
			if(encoder.matches(client.getPassword(), obj.getPassword())) {
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
