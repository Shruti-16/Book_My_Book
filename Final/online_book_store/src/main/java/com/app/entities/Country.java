package com.app.entities;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Getter
//@Setter
//@NoArgsConstructor
//@AllArgsConstructor
@ToString
@Table(name = "countries")
public class Country {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long countryId;

	/*
	 * description
	 * 
	 * @param
	 * 
	 * 
	 * 
	 * @return
	 * 
	 * @throws
	 */
	private String name;
//	@OneToMany(fetch = FetchType.EAGER)
//	private List<City> cities = new ArrayList<>();

	public Country(Long countryId, String name) {
		super();
		this.countryId = countryId;
		this.name = name;
	}

	public Country() {
		super();
	}

	public Long getCountryId() {
		return countryId;
	}

	public void setCountryId(Long countryId) {
		this.countryId = countryId;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

}
