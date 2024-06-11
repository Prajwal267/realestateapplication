package com.realestate.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import com.realestate.entity.AssignAgent;
import com.realestate.repository.AssignAgentRepository;

public class AssignAgentServiceImpl implements AssignAgentService {
	
	@Autowired
	private AssignAgentRepository assignRepo;
	
	@Override
	public AssignAgent saveAssignAgent(AssignAgent assignagent) {
		AssignAgent assignAgent = assignRepo.save(assignagent);
		return assignAgent;
	}

	@Override
	public List<AssignAgent> getallWishListByEmail(String email) {
		return assignRepo.findByUserEmail(email);
	}
}
