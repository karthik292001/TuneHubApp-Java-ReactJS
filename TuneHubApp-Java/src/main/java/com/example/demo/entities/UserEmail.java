package com.example.demo.entities;

public class UserEmail {
	String email;

	public UserEmail() {
		super();
	}

	public UserEmail(String email) {
		super();
		this.email = email;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	@Override
	public String toString() {
		return "UserEmail [email=" + email + "]";
	}
	
	
}
