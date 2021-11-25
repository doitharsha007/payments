package com.example.demo.controller;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.repository.Dashboard_Repository;

import java.util.List;

import com.example.demo.model.DashBoard;

@CrossOrigin(origins= "http://localhost:3000/")
@RestController
@RequestMapping("/api/v1/")
public class Dashboard_controller {
	@Autowired
	private Dashboard_Repository dashboardrepository;
	
	@PersistenceContext
	private EntityManager entityManager;
	
	//add to dashboard
	@GetMapping("/dashboard")
	public DashBoard createDashBoard(@RequestBody DashBoard data) {
		return dashboardrepository.save(data);
	}
	
	//select top 5 recent dashboard
	@PutMapping("/dashboard")
	public List<DashBoard> findLastFiveTransactions(){
		return entityManager.createQuery("SELECT d FROM DashBoard d ORDER BY d.id DESC",DashBoard.class)
				.setMaxResults(5)
				.getResultList();
	}
	

}
