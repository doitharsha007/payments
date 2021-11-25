package com.example.demo.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="receiver_Data")
public class Receiver_Data {
	@Id
	@Column(name="bic")	
	private String bic;
	@Column(name="institution")
	private String institution;
public Receiver_Data() {
	
}
public Receiver_Data(String bic, String institution) {
	super();
	this.bic = bic;
	this.institution = institution;
}
public String getBic() {
	return bic;
}
public void setBic(String bic) {
	this.bic = bic;
}
public String getInstitution() {
	return institution;
}
public void setInstitution(String institution) {
	this.institution = institution;
}


}
