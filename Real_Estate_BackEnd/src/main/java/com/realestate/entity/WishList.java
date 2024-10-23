package com.realestate.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class WishList {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int wishListId;

	private String userEmail;
	
	private String userFullName;
	
	private String agentFullName;

	private String propertyRegId;

	private String propertyName;

	private String propertyImageUrl;

	private String propertyLocation;

	public WishList() {
	}

	public int getWishListId() {
		return wishListId;
	}

	public void setWishListId(int wishListId) {
		this.wishListId = wishListId;
	}

	public String getUserEmail() {
		return userEmail;
	}

	public void setUserEmail(String userEmail) {
		this.userEmail = userEmail;
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
	
	public String getUserFullName() {
		return userFullName;
	}

	public void setUserFullName(String userFullName) {
		this.userFullName = userFullName;
	}

	@Override
	public String toString() {
		return "WishList [wishListId=" + wishListId + ", userEmail=" + userEmail + ", userFullName=" + userFullName
				+ ", agentFullName=" + agentFullName + ", propertyRegId=" + propertyRegId + ", propertyName="
				+ propertyName + ", propertyImageUrl=" + propertyImageUrl + ", propertyLocation=" + propertyLocation
				+ "]";
	}

	public WishList(int wishListId, String userEmail, String userFullName, String agentFullName, String propertyRegId,
			String propertyName, String propertyImageUrl, String propertyLocation) {
		super();
		this.wishListId = wishListId;
		this.userEmail = userEmail;
		this.userFullName = userFullName;
		this.agentFullName = agentFullName;
		this.propertyRegId = propertyRegId;
		this.propertyName = propertyName;
		this.propertyImageUrl = propertyImageUrl;
		this.propertyLocation = propertyLocation;
	}
}
