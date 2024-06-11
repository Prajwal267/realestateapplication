package com.realestate.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class AssignAgent {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int assignAgentId;

	private String userEmail;

	private String userPhoneNumber;

	private String userFullName;

	private String agentFullName;
	
	private String agentEmail;

	private String propertyRegId;

	private String propertyName;

	private String propertyImageUrl;

	private String propertyLocation;

	public AssignAgent() {
	}

	public int getAssignAgentId() {
		return assignAgentId;
	}

	public void setAssignAgentId(int assignAgentId) {
		this.assignAgentId = assignAgentId;
	}

	public String getUserEmail() {
		return userEmail;
	}

	public void setUserEmail(String userEmail) {
		this.userEmail = userEmail;
	}

	public String getUserPhoneNumber() {
		return userPhoneNumber;
	}

	public void setUserPhoneNumber(String userPhoneNumber) {
		this.userPhoneNumber = userPhoneNumber;
	}

	public String getUserFullName() {
		return userFullName;
	}

	public void setUserFullName(String userFullName) {
		this.userFullName = userFullName;
	}

	public String getAgentFullName() {
		return agentFullName;
	}

	public void setAgentFullName(String agentFullName) {
		this.agentFullName = agentFullName;
	}

	public String getPropertyRegId() {
		return propertyRegId;
	}

	public void setPropertyRegId(String propertyRegId) {
		this.propertyRegId = propertyRegId;
	}

	public String getPropertyName() {
		return propertyName;
	}

	public void setPropertyName(String propertyName) {
		this.propertyName = propertyName;
	}

	public String getPropertyImageUrl() {
		return propertyImageUrl;
	}

	public void setPropertyImageUrl(String propertyImageUrl) {
		this.propertyImageUrl = propertyImageUrl;
	}

	public String getPropertyLocation() {
		return propertyLocation;
	}

	public void setPropertyLocation(String propertyLocation) {
		this.propertyLocation = propertyLocation;
	}

	
}
