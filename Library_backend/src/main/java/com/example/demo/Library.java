package com.example.demo;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
@Document(collection="Collection_1")
public class Library {
	@Id
	 String id;
	 String username;
	 String email;
	 String dob;
	String password;
	public String type;
	
	
	
	public Library(String type) {
		super();
		this.type = type;
	}
	public String getType() {
		return type;
	}
	public void setType(String type) {
		this.type = type;
	}
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getDob() {
		return dob;
	}
	public void setDob(String dob) {
		this.dob = dob;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public Library(String id, String username, String email, String dob, String password) {
		this.id = id;
		this.username = username;
		this.email = email;
		this.dob = dob;
		this.password = password;
	}
	public Library() {
    }
    public Library(String email, String password) {
        this.email = email;
        this.password = password;
    }
	
	

}
