package com.realestate.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.realestate.entity.WishList;

public interface WishListRepository extends JpaRepository<WishList, Integer>{
	
	public boolean existsByPropertyRegIdAndUserEmail(String propertyRegId,String userEmail);
	
	public List<WishList> findByUserEmail(String userEmail);
}
