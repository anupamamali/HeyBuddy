package com.cs.heybuddy.model;

import java.util.List;
import java.util.Set;

public class JwtResponse {

	public JwtResponse(String jwt, Long id, String userName, String email, Set<String> roles) {

		this.accessToken = jwt;
		this.email = email;
		this.id = id;
		this.userName = userName;
		this.roles = roles;
		this.tokenType = "Bearer";
	}

	private String accessToken;
	private String tokenType;
	private long id;
	private String userName;
	private String email;
	private Set<String> roles;
	
	public String getAccessToken() {
		return accessToken;
	}
	public void setAccessToken(String accessToken) {
		this.accessToken = accessToken;
	}
	public String getTokenType() {
		return tokenType;
	}
	public void setTokenType(String tokenType) {
		this.tokenType = tokenType;
	}
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getUserName() {
		return userName;
	}
	public void setUserName(String userName) {
		this.userName = userName;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public Set<String> getRoles() {
		return roles;
	}
	public void setRoles(Set<String> roles) {
		this.roles = roles;
	}
	
	
}
