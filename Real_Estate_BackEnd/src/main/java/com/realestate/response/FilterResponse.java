package com.realestate.response;

import java.util.List;

import com.realestate.entity.Property;

public class FilterResponse {
	
	private List<Property> property;
	
	private boolean success;
	
	
	public FilterResponse() {
		// TODO Auto-generated constructor stub
	}
	
	public boolean isSuccess() {
		return success;
	}

	public void setSuccess(boolean success) {
		this.success = success;
	}
	public List<Property> getProperty() {
		return property;
	}

	public void setProperty(List<Property> property) {
		this.property = property;
	}

	public FilterResponse(List<Property> property, boolean success) {
		super();
		this.property = property;
		this.success = success;
	}

	@Override
	public String toString() {
		return "FilterResponse [property=" + property + ", success=" + success + "]";
	}

}
