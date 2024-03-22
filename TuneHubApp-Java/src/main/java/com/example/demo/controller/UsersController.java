package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.Logindata;
import com.example.demo.entities.Songs;
import com.example.demo.entities.UserEmail;
import com.example.demo.entities.Users;
import com.example.demo.services.SongsService;
import com.example.demo.services.UsersService;

import jakarta.servlet.http.HttpSession;

@RestController
@CrossOrigin("*")
public class UsersController 
{
	@Autowired
	UsersService userv;
	
	@Autowired
	SongsService songserv;
	
	
	@PostMapping("/register")
	public String addUser(@RequestBody Users user ) {
		boolean userstatus = userv.emailExists
				(user.getEmail());
		if(userstatus == false) {
			userv.addUser(user);
			return "login";
		}
		else
		{
			return "register";
		}
		
	}

	@PostMapping("/login")
	public String validateUser(@RequestBody Logindata logindata,HttpSession session)
	{
		String email=logindata.getEmail();
		String password=logindata.getPassword();
		//invoking validateUser() in service
		if(userv.validateUser(email, password) == true)
		{
			
			session.setAttribute("email", email);
			//checking whether the user is admin or customer
			if(userv.getRole(email).equalsIgnoreCase("admin"))
			{
				return "adminhome";
			}
			else
			{
				return "customerhome";
			}
		}
		else
		{
			return "login";
		}
	}
	
	
	
	@PostMapping("/exploreSongs")
	public String exploreSongs(@RequestBody UserEmail userEmail) {
			String email = userEmail.getEmail();
			Users user = userv.getUser(email);
			boolean userStatus = user.isPremium();
			if(userStatus == true) {
				return "displaysongs";
			}
			else {
				return "payment";
			}
	}
	
	
}













