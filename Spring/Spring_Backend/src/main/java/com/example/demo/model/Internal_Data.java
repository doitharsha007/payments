package com.example.demo.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="internal_data")
public class Internal_Data {
	@Id
	private String id;
	@Column(name="name")
	private String name;
	@Column(name="clearbalance")
	private long clearBalance;
	@Column(name="overdraft")
	private boolean overdraft;
	
	public Internal_Data() {
		
	}
	public Internal_Data(String id, String name, long clearBalance, boolean overdraft) {
		super();
		this.id = id;
		this.name = name;
		this.clearBalance = clearBalance;
		this.overdraft = overdraft;
	}
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public long getClearBalance() {
		return clearBalance;
	}
	public void setClearBalance(long clearBalance) {
		this.clearBalance = clearBalance;
	}
	public boolean isOverdraft() {
		return overdraft;
	}
	public void setOverdraft(boolean overdraft) {
		this.overdraft = overdraft;
	}

}
