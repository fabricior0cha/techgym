package com.fabricio.gymtech.entities.enums;

public enum Objective {

	MUSCLE_GAIN(1),
	FAT_LOSS(2),
	PHYSICAL_CONDITIONING(3);
	
	private int code;
	
	private Objective(int code) {
		this.code = code;
	}
	
	public int getCode() {
		return code;
	}
	
	public static Objective valueOf(int code) {
		for (Objective value : Objective.values()) {
			if(value.getCode() == code) {
				return value;
			}
		}
		throw new IllegalArgumentException("Invalid code.");
	}
	
}
