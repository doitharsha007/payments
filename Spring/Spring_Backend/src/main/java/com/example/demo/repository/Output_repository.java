package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.model.Output;

@Repository
public interface Output_repository extends JpaRepository<Output,String>{

}
