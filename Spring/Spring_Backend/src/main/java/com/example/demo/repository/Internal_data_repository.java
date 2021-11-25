package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.model.Internal_Data;

@Repository
public interface Internal_data_repository extends JpaRepository<Internal_Data,String>{

}
