package com.example.demo.controller;

import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.PaymentVerificationRequest;
import com.example.demo.entities.UserEmail;
import com.example.demo.entities.Users;
import com.example.demo.services.UsersService;
import com.razorpay.Order;
import com.razorpay.RazorpayClient;
import com.razorpay.RazorpayException;
import com.razorpay.Utils;

import jakarta.servlet.http.HttpSession;

@RestController
@CrossOrigin("*")
public class PaymentController {
	@Autowired
	UsersService service;
	
	@PostMapping("/createOrder")
	@ResponseBody
	public String createOrder() {
		Order order = null;
		try {
			RazorpayClient razorpay = new RazorpayClient("rzp_test_XmwnchQOeOtvgY", 
					"0BqRP7065kuUDvV6ZaimqRSa");

			JSONObject orderRequest = new JSONObject();
			orderRequest.put("amount",50000);
			orderRequest.put("currency","INR");
			orderRequest.put("receipt", "receipt#1");
			JSONObject notes = new JSONObject();
			notes.put("notes_key_1","Tea, Earl Grey, Hot");
			orderRequest.put("notes",notes);

		
			order = razorpay.orders.create(orderRequest);
		}
		catch(Exception e) {
			System.out.println("exception while crteating order");
		}
		return order.toString();
	}
	
	@PostMapping("/verify")
	@ResponseBody
	public String verifyPayment( @RequestBody PaymentVerificationRequest request) {
		try {
	        // Initialize Razorpay client with your API key and secret
	        @SuppressWarnings("unused")
			RazorpayClient razorpayClient = new RazorpayClient("rzp_test_XmwnchQOeOtvgY", 
	        								"0BqRP7065kuUDvV6ZaimqRSa");
	        // Create a signature verification data string
	        String verificationData =  request.getOrderId()+ "|" + request.getPaymentId();

	        // Use Razorpay's utility function to verify the signature
	        boolean isValidSignature = Utils.verifySignature(verificationData, request.getSignature(), 
	        													"0BqRP7065kuUDvV6ZaimqRSa");
	        if(isValidSignature) {
	        	return "true";
	        }else {
	        	return "false";
	        }
	        
	    } catch (RazorpayException e) {
	        e.printStackTrace();
	        return "false";
	    }
	}
	
	
	//payment-success -> update to premium user
	@PostMapping("/payment-success")
	public String paymentSuccess(@RequestBody UserEmail userEmail){
		String email=userEmail.getEmail();
		Users user = service.getUser(email);
		user.setPremium(true);
		service.updateUser(user);
		
		return "map-login";
	}
	
}
