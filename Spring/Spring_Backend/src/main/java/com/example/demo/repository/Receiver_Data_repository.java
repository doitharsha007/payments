package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.model.Receiver_Data;

@Repository
public interface Receiver_Data_repository extends JpaRepository<Receiver_Data,String>{

}
