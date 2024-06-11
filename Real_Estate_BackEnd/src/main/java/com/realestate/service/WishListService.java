package com.realestate.service;

import java.util.List;

import com.realestate.entity.WishList;

public interface WishListService {
	
	public WishList saveWishList(WishList wishList);

	public List<WishList> getallWishListByEmail(String email);
}
