package com.example.demo.model;

import javax.persistence.*;

@Entity
@Table(name="dashboard")
public class DashBoard {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private long id;
	@Column
	private String senderid;
	@Column
	private String sender;
	@Column
	private String receiver;
	@Column
	private String receiverinstitution;
	@Column
	private long amount;
	@Column
	private boolean status;
	public DashBoard() {
		
	}
	public DashBoard(String senderid,String sender, String receiver,String receiverinstitution, long amount, boolean status) {
		super();
		this.senderid=senderid;
		this.sender = sender;
		this.receiver = receiver;
		this.receiverinstitution=receiverinstitution;
		this.amount = amount;
		this.status = status;
		
	}
	
	public String getReceiverinstitution() {
		return receiverinstitution;
	}
	public void setReceiverinstitution(String receiverinstitution) {
		this.receiverinstitution = receiverinstitution;
	}
	public String getSenderid() {
		return senderid;
	}
	public void setSenderid(String senderid) {
		this.senderid = senderid;
	}
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getSender() {
		return sender;
	}
	public void setSender(String sender) {
		this.sender = sender;
	}
	public String getReceiver() {
		return receiver;
	}
	public void setReceiver(String receiver) {
		this.receiver = receiver;
	}
	public long getAmount() {
		return amount;
	}
	public void setAmount(long amount) {
		this.amount = amount;
	}
	public boolean isStatus() {
		return status;
	}
	public void setStatus(boolean status) {
		this.status = status;
	}
	
}
