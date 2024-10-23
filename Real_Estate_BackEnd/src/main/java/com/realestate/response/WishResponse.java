package com.realestate.response;

import com.realestate.entity.WishList;

public class WishResponse {
	
	private String message;
	
	private boolean success;
	
	private WishList wishList;
	
	public WishResponse() {
	
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

	public WishList getWishList() {
		return wishList;
	}

	public void setWishList(WishList wishList) {
		this.wishList = wishList;
	}

	public WishResponse(String message, boolean success, WishList wishList) {
		super();
		this.message = message;
		this.success = success;
		this.wishList = wishList;
	}

	@Override
	public String toString() {
		return "WishResponse [message=" + message + ", success=" + success + ", wishList=" + wishList + "]";
	}

	
	
}
