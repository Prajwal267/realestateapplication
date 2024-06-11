package com.realestate.response;

import java.util.List;

import com.realestate.entity.WishList;

public class WishListResponse {

	private String message;

	private boolean success;

	private List<WishList> wishLists;

	public WishListResponse() {
		// TODO Auto-generated constructor stub
	}

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}

	public boolean isSuccess() {
		return success;
	}

	public void setSuccess(boolean success) {
		this.success = success;
	}

	public List<WishList> getWishLists() {
		return wishLists;
	}

	public void setWishLists(List<WishList> wishLists) {
		this.wishLists = wishLists;
	}

	@Override
	public String toString() {
		return "WishListResponse [message=" + message + ", success=" + success + ", wishLists=" + wishLists + "]";
	}

	public WishListResponse(String message, boolean success, List<WishList> wishLists) {
		super();
		this.message = message;
		this.success = success;
		this.wishLists = wishLists;
	}

}
