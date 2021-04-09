package com.cs.heybuddy.service;

import com.cs.heybuddy.model.Event;
import com.cs.heybuddy.model.User;

public interface IUserService {
	
	public User createUser(User user);
	
	public User getUser(Long userId);
	
	public User updateUser(User user);
	
	public void deleteUser(Long userId);
}
