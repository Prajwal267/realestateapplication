package com.realestate.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.realestate.entity.AssignAgent;

public interface AssignAgentRepository extends JpaRepository<AssignAgent, Integer>{
	
public boolean existsByPropertyRegIdAndUserEmail(String propertyRegId,String userEmail);
	
	public List<AssignAgent> findByUserEmail(String userEmail);
}
