package com.realestate.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.realestate.entity.WishList;
import com.realestate.repository.WishListRepository;

@Service
public class WishListServiceImpl implements WishListService {
	
	@Autowired
	private WishListRepository wishRepo;
	
	@Override
	public WishList saveWishList(WishList wishList) {
		WishList addWish = wishRepo.save(wishList);
		return addWish;
	}

	@Override
	public List<WishList> getallWishListByEmail(String email) {
		return wishRepo.findByUserEmail(email);
	}

}
