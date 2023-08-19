package com.app.entities;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
@Table(name = "authors")
public class Author extends BaseEntity {
	/*
	5. Photo (blob)
	 */
	@OneToMany(cascade = CascadeType.ALL,orphanRemoval = true)
	private List<Book> books = new ArrayList<>();
	private String name;
	private String description;
	private LocalDate dateOfBirth;

}
