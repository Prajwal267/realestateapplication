package com.realestate.dto;

import java.util.List;

public class PropertyFilterDTO {

	private int propertyPrice;
	private int propertySqFt;
	private List<String> propertyStatus; 
	private List<String> propertyCategory;
	private List<String> propertyCity;
	
	private String propertyCapital;

	public PropertyFilterDTO() {
	}

	public int getPropertyPrice() {
		return propertyPrice;
	}

	public void setPropertyPrice(int propertyPrice) {
		this.propertyPrice = propertyPrice;
	}

	public int getPropertySqFt() {
		return propertySqFt;
	}

	public void setPropertySqFt(int propertySqFt) {
		this.propertySqFt = propertySqFt;
	}

	public List<String> getPropertyStatus() {
		return propertyStatus;
	}

	public void setPropertyStatus(List<String> propertyStatus) {
		this.propertyStatus = propertyStatus;
	}

	public List<String> getPropertyCategory() {
		return propertyCategory;
	}

	public void setPropertyCategory(List<String> propertyCategory) {
		this.propertyCategory = propertyCategory;
	}

	public List<String> getPropertyCity() {
		return propertyCity;
	}

	public void setPropertyCity(List<String> propertyCity) {
		this.propertyCity = propertyCity;
	}

	public String getPropertyCapital() {
		return propertyCapital;
	}

	public void setPropertyCapital(String propertyCapital) {
		this.propertyCapital = propertyCapital;
	}

	@Override
	public String toString() {
		return "PropertyFilterDTO [propertyPrice=" + propertyPrice + ", propertySqFt=" + propertySqFt
				+ ", propertyStatus=" + propertyStatus + ", propertyCategory=" + propertyCategory + ", propertyCity="
				+ propertyCity + ", propertyCapital=" + propertyCapital + "]";
	}

	public PropertyFilterDTO(int propertyPrice, int propertySqFt, List<String> propertyStatus,
			List<String> propertyCategory, List<String> propertyCity, String propertyCapital) {
		super();
		this.propertyPrice = propertyPrice;
		this.propertySqFt = propertySqFt;
		this.propertyStatus = propertyStatus;
		this.propertyCategory = propertyCategory;
		this.propertyCity = propertyCity;
		this.propertyCapital = propertyCapital;
	}

}
