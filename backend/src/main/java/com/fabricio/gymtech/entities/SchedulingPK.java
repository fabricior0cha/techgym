package com.fabricio.gymtech.entities;

import java.io.Serializable;

import javax.persistence.Embeddable;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Embeddable
public class SchedulingPK implements Serializable {

	private static final long serialVersionUID = 1L;
	
	@ManyToOne()
	@JoinColumn(name = "trainer_id")
	@JsonIgnoreProperties(value = "schedulings")
	private Trainer trainer;
	
	@ManyToOne()
	@JoinColumn(name = "client_id")
	@JsonIgnoreProperties(value = "schedulings")
	private Client client;

	public SchedulingPK() {
		super();
	}

	public Trainer getTrainer() {
		return trainer;
	}

	public void setTrainer(Trainer trainer) {
		this.trainer = trainer;
	}

	public Client getClient() {
		return client;
	}

	public void setClient(Client client) {
		this.client = client;
	}
	
	

}
