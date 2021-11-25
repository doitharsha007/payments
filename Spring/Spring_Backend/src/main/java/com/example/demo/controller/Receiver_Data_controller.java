package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.exception.ResourceNotFoundException;
import com.example.demo.model.Receiver_Data;
import com.example.demo.repository.Receiver_Data_repository;

@CrossOrigin(origins= "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")
public class Receiver_Data_controller {
	@Autowired
	private Receiver_Data_repository receiverdatarepository;
	@GetMapping("/receiver_data")
	public List<Receiver_Data> getAllReceiverData(){
		return receiverdatarepository.findAll();
	}
	
	//get bank name by BIC
	@GetMapping("/receiver_data/{bic}")
	public ResponseEntity<Receiver_Data> getNameById(@PathVariable String bic){
		return ResponseEntity.ok(
				receiverdatarepository.findById(bic).
				orElseThrow(()->new ResourceNotFoundException("bank not found by BIC "+bic))
				);
	}

}
