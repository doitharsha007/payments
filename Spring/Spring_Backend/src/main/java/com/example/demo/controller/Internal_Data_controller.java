package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.repository.Internal_data_repository;
import com.example.demo.exception.ResourceNotFoundException;
import com.example.demo.model.Internal_Data;
import java.util.List;

@CrossOrigin(origins= "http://localhost:3000/")
@RestController
@RequestMapping("/api/v1/")
public class Internal_Data_controller {
	
	@Autowired
	private Internal_data_repository internaldatarepository;
	
	@GetMapping("/internal_data")
	public List<Internal_Data> getAllInternalData(){
		return internaldatarepository.findAll();
	}
	
	//get sender details
	@GetMapping("/internal_data/{id}")
	public ResponseEntity<Internal_Data> getSenderById(@PathVariable String id){
		Internal_Data data=internaldatarepository.findById(id)
				.orElseThrow(()-> new ResourceNotFoundException("sender not found with id "+id));
		return ResponseEntity.ok(data);
	
	}
	
	//update sender
	@PutMapping("/internal_data/{id}")
	public ResponseEntity<Internal_Data> updateSender(@PathVariable String id,@RequestBody Internal_Data newdata){
		Internal_Data data=internaldatarepository.findById(id)
				.orElseThrow(()-> new ResourceNotFoundException("sender not found with id "+id));
		//System.out.println(newdata.getClearBalance());
		data.setClearBalance(newdata.getClearBalance());
		Internal_Data updated_data=internaldatarepository.save(data);
		return ResponseEntity.ok(updated_data);
	}
}
