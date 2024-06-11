package com.realestate.service;

import java.util.List;

import com.realestate.entity.AssignAgent;

public interface AssignAgentService {
	
	public AssignAgent saveAssignAgent(AssignAgent assigngent);

	public List<AssignAgent> getallWishListByEmail(String email);
}
