package com.example.demo.entities;

public class Logindata {
	String email;
	String password;
	
	
	public Logindata() {
		super();
	}
	
	public Logindata(String email, String password) {
		super();
		this.email = email;
		this.password = password;
	}
	
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	@Override
	public String toString() {
		return "Formdata [email=" + email + ", password=" + password + "]";
	}
}
