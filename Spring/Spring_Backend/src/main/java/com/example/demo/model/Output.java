package com.example.demo.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="output")
public class Output {
	@Id
	@Column(name="message")
	private String message;
	@Column(name="instruction")
	private String instruction;
	public Output() {
		
	}
	public Output(String message, String instruction) {
		super();
		this.message = message;
		this.instruction = instruction;
	}
	public String getMessage() {
		return message;
	}
	public void setMessage(String message) {
		this.message = message;
	}
	public String getInstruction() {
		return instruction;
	}
	public void setInstruction(String instruction) {
		this.instruction = instruction;
	}

}
