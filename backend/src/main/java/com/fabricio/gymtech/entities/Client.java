package com.fabricio.gymtech.entities;

import java.io.Serializable;
import java.util.List;
import java.util.Objects;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

import com.fabricio.gymtech.entities.enums.Objective;

@Entity
public class Client implements Serializable {

	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	private String name;
	
	private String email;
	
	private String password;
	
	private Integer age;
	
	private Double height;
	
	private Double weight;
	
	private Integer objective;
	
	
	@OneToMany(mappedBy = "client")
	private List<Scheduling> schedulings;

	public Client() {
	}

	public Client(Long id, String name, String email, String password, Integer age, Double height, Double weight,
			Objective objective) {
		this.id = id;
		this.name = name;
		this.email = email;
		this.password = password;
		this.age = age;
		this.height = height;
		this.weight = weight;
		setObjective(objective);
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public Integer getAge() {
		return age;
	}

	public void setAge(Integer age) {
		this.age = age;
	}

	public Double getHeight() {
		return height;
	}

	public void setHeight(Double height) {
		this.height = height;
	}

	public Double getWeight() {
		return weight;
	}

	public void setWeight(Double weight) {
		this.weight = weight;
	}

	public Objective getObjective() {
		return Objective.valueOf(objective);
	}

	public void setObjective(Objective objective) {
		if(objective != null) {
			this.objective = objective.getCode();
		}
	}
	public List<Scheduling> getSchedulings() {
		return schedulings;
	}


	@Override
	public int hashCode() {
		return Objects.hash(id);
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Client other = (Client) obj;
		return Objects.equals(id, other.id);
	}

	
	
	
}
