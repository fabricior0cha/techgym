package com.fabricio.gymtech.dtos;

import java.time.LocalDateTime;
import java.util.Date;

public class SchedulingDTO {

	private String trainerEmail;
	
	private String clientEmail;

	private LocalDateTime date;
	
	

	public SchedulingDTO() {
		
	}

	public String getTrainerEmail() {
		return trainerEmail;
	}

	public void setTrainerEmail(String trainerEmail) {
		this.trainerEmail = trainerEmail;
	}

	public String getClientEmail() {
		return clientEmail;
	}

	public void setClientEmail(String clientEmail) {
		this.clientEmail = clientEmail;
	}

	public LocalDateTime getDate() {
		return date;
	}

	public void setDate(LocalDateTime date) {
		this.date = date;
	}
	
	
	
}
