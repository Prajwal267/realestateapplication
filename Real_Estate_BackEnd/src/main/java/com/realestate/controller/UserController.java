package com.realestate.controller;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.realestate.dto.PropertyFilterDTO;
import com.realestate.entity.Property;
import com.realestate.entity.UserAgent;
import com.realestate.entity.WishList;
import com.realestate.exception.UserAgentException;
import com.realestate.repository.PropertyRepository;
import com.realestate.repository.UserAgentRepository;
import com.realestate.repository.WishListRepository;
import com.realestate.response.MessageResponse;
import com.realestate.response.ProfileResponse;
import com.realestate.response.PropertyResponse;
import com.realestate.response.WishListResponse;
import com.realestate.response.WishResponse;
import com.realestate.service.PropertyService;
import com.realestate.service.UserAgentService;
import com.realestate.service.WishListService;

@RestController
@RequestMapping("/api/user")
public class UserController {

	// eyJhbGciOiJIUzM4NCJ9.eyJpYXQiOjE3MDc4ODIzNTYsImV4cCI6MTcwODcyODM1NiwiZW1haWwiOiJkZW1vMUBnbWFpbC5jb20ifQ.IL4Ql1kFNTLHGToq-HVpxP1fjU2nK17JB9WQxzMe4rmaEonpjl8_nV-nZokTm_Rr
	// eyJhbGciOiJIUzM4NCJ9.eyJpYXQiOjE3MDc4ODQxNTgsImV4cCI6MTcwODczMDE1OCwiZW1haWwiOiJhZ2VudDJAZ21haWwuY29tIn0.GwjKF0sgPT3WT0CdMJi1G0OpASRZT-nRA4fDejtaA9aZPjT0eR3QweAZPT42B6M-

	@Autowired
	private PropertyService propertyService;

	@Autowired
	private UserAgentService userAgentService;

	@Autowired
	private UserAgentRepository userAgentRepo;

	@Autowired
	private PropertyRepository propRepo;

	@Autowired
	private WishListService wishListService;

	@Autowired
	private WishListRepository wishRepo;

	@GetMapping("/profile")
	public ResponseEntity<ProfileResponse> getUserProfileHandler(@RequestHeader("Authorization") String jwt)
			throws UserAgentException {
		ProfileResponse profileResponse = new ProfileResponse();

		UserAgent userAgent = userAgentService.findProfileByJwt(jwt);

		if (userAgent.getRole().equals("ROLE_USER")) {
			profileResponse.setMessage("Authorized Successfully for viewing profile..." + userAgent.getEmail());
			profileResponse.setSuccess(true);
			profileResponse.setUserAgent(userAgent);
			return new ResponseEntity<ProfileResponse>(profileResponse, HttpStatus.ACCEPTED);
		} else {
			profileResponse.setMessage("Authorized Failed for viewing profile..." + userAgent.getEmail());
			profileResponse.setSuccess(false);
			profileResponse.setUserAgent(null);
			return new ResponseEntity<ProfileResponse>(profileResponse, HttpStatus.ACCEPTED);
		}

	}

	@PostMapping("/viewProperty/{location}")
	public ResponseEntity<PropertyResponse> getPropertyHandlerByLocation(@RequestHeader("Authorization") String jwt,
			@PathVariable("location") String location) {

		PropertyResponse propertyResponse = new PropertyResponse();

		List<Property> getPropLoc = propertyService.getAllPropertiesByLocation(location);

		if (getPropLoc.isEmpty()) {
			propertyResponse.setMessage("There is no location added now...." + location);
			propertyResponse.setSuccess(false);
			propertyResponse.setProperty(null);
			return new ResponseEntity<>(propertyResponse, HttpStatus.BAD_REQUEST);
		} else {
			propertyResponse.setMessage("Displaying the Properties from the location: " + location);
			propertyResponse.setSuccess(true);
			propertyResponse.setProperty(getPropLoc);
			return new ResponseEntity<>(propertyResponse, HttpStatus.OK);
		}

	}

	@PostMapping("/addWishList/{userId}/{propertyId}")
	public ResponseEntity<WishResponse> addWishListHandler(@RequestHeader("Authorization") String jwt,
			@PathVariable("propertyId") int propertyId, @PathVariable("userId") int userId) {
		WishResponse wishRespone = new WishResponse();

		Optional<UserAgent> getUserDet = userAgentRepo.findById(userId);

		Optional<Property> getPropDet = propRepo.findById(propertyId);

		UserAgent getUser = null;

		Property property = null;

		if (getUserDet.isPresent()) {
			getUser = getUserDet.get();
		} else {
			wishRespone.setMessage("User with ID " + userId + " not found");
			wishRespone.setSuccess(false);
			wishRespone.setWishList(null);
			return new ResponseEntity<>(wishRespone, HttpStatus.BAD_REQUEST);
		}

		if (getPropDet.isPresent()) {
			property = getPropDet.get();
		} else {
			wishRespone.setMessage("Property with ID " + propertyId + " not found");
			wishRespone.setSuccess(false);
			wishRespone.setWishList(null);
			return new ResponseEntity<>(wishRespone, HttpStatus.BAD_REQUEST);
		}

		if (getUser.getRole().equals("ROLE_USER")) {

			boolean addWishFlag = wishRepo.existsByPropertyRegIdAndUserEmail(property.getPropertyRegId(),
					getUser.getEmail());

			if (!addWishFlag) {
				WishList wishList = new WishList();

				wishList.setUserEmail(getUser.getEmail());
				wishList.setUserFullName(getUser.getFullName());
				wishList.setAgentFullName(property.getUserAgentName());
				wishList.setPropertyRegId(property.getPropertyRegId());
				wishList.setPropertyName(property.getPropertyName());
				wishList.setPropertyImageUrl(property.getPropertyImageUrl());
				wishList.setPropertyLocation(property.getPropertyCapital());

				WishList addWishList = wishListService.saveWishList(wishList);

				if (addWishList != null) {
					wishRespone.setMessage("Added to WishList " + property.getPropertyName());
					wishRespone.setSuccess(true);
					wishRespone.setWishList(wishList);
					return new ResponseEntity<>(wishRespone, HttpStatus.OK);

				} else {
					wishRespone.setMessage("Something error on Server");
					wishRespone.setSuccess(false);
					wishRespone.setWishList(null);
					return new ResponseEntity<>(wishRespone, HttpStatus.BAD_REQUEST);
				}
			} else {
				wishRespone.setMessage("The Property with " + property.getPropertyRegId() + " is already existed in "
						+ getUser.getEmail());
				wishRespone.setSuccess(false);
				wishRespone.setWishList(null);
				return new ResponseEntity<>(wishRespone, HttpStatus.BAD_REQUEST);
			}

		} else {

			wishRespone.setMessage("The Role didnt match our ROLE_USER");
			wishRespone.setSuccess(false);
			wishRespone.setWishList(null);
			return new ResponseEntity<>(wishRespone, HttpStatus.BAD_REQUEST);
		}
	}

	@GetMapping("/viewWishList/{userEmail}")
	public ResponseEntity<WishListResponse> viewAllWishListHandler(@RequestHeader("Authorization") String jwt,
			@PathVariable("userEmail") String userEmail) {
		WishListResponse wishListResponse = new WishListResponse();

		List<WishList> getAllWishLists = wishListService.getallWishListByEmail(userEmail);

		if (getAllWishLists.isEmpty()) {
			wishListResponse.setMessage("There is no wishlist added now...." + userEmail);
			wishListResponse.setSuccess(false);
			wishListResponse.setWishLists(getAllWishLists);
			return new ResponseEntity<>(wishListResponse, HttpStatus.BAD_REQUEST);
		} else {
			wishListResponse.setMessage("Displaying the WishList from the user email: " + userEmail);
			wishListResponse.setSuccess(true);
			wishListResponse.setWishLists(getAllWishLists);
			return new ResponseEntity<>(wishListResponse, HttpStatus.OK);
		}
	}

	@GetMapping("/deleteWishList/{userEmail}/{wishListId}")
	public ResponseEntity<MessageResponse> deleteWishListHandler(@RequestHeader("Authorization") String jwt,
			@PathVariable("wishListId") int wishListId, @PathVariable("userEmail") String userEmail) {
		MessageResponse response = new MessageResponse();

		List<WishList> getAllWishList = wishListService.getallWishListByEmail(userEmail);

		if (getAllWishList.isEmpty()) {
			response.setMessage("Wish List is Empty for User Email: " + userEmail);
			return new ResponseEntity<>(response, HttpStatus.OK);
		} else {
			Optional<WishList> getWishList = wishRepo.findById(wishListId);

			WishList wishList = null;

			if (getWishList.isPresent()) {
				wishList = getWishList.get();

				wishRepo.delete(wishList);
				response.setMessage("Wish List of Property was deleted with Reg Id: " + wishList.getPropertyRegId());
				return new ResponseEntity<>(response, HttpStatus.OK);

			} else {
				response.setMessage("WishList was not found  with  Id: " + wishListId);
				return new ResponseEntity<>(response, HttpStatus.BAD_REQUEST);
			}

			
		}
	}
	
	
	@PostMapping("/filter")
	public ResponseEntity<List<Property>> filterProperties(@RequestHeader("Authorization") String jwt,
			@RequestBody PropertyFilterDTO filterDTO) {
		System.out.println(filterDTO);
		List<Property> filteredProperties = propertyService.filterProperties(filterDTO);
		System.out.println(filteredProperties);
		List<Property> getSpecificProperty = new ArrayList<>();
		//filterDTO.getPropertyCapital()
		for(Property getAllProperty:filteredProperties) {
			if(getAllProperty.getPropertyCapital().equals(filterDTO.getPropertyCapital())) {
				getSpecificProperty.add(getAllProperty);
			}
		}
		
		return ResponseEntity.ok(getSpecificProperty);
	}
}
