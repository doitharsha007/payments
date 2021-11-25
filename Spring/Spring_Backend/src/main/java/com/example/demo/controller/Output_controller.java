package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.repository.Output_repository;

import java.util.List;

import com.example.demo.exception.ResourceNotFoundException;
import com.example.demo.model.Output;

@CrossOrigin(origins= "http://localhost:3000")
@RestController
@RequestMapping("/api/v1")
public class Output_controller {
	@Autowired
	private Output_repository outputrepository;
	
	@GetMapping("/output")
	public List<Output> getAllOutput(){
		return outputrepository.findAll();
	}
	
	//get message instruction
	@GetMapping("/output/{msg}")
	public ResponseEntity<Output> getInstructionByMessage(@PathVariable String msg){
		return ResponseEntity.ok(
				outputrepository.findById(msg).
				orElseThrow(()->new ResourceNotFoundException("intsruction not found by message "+msg))
				);
		
	}

}
