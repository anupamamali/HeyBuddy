package com.cs.heybuddy.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cs.heybuddy.model.Event;
import com.cs.heybuddy.model.User;
import com.cs.heybuddy.repository.IUserRepository;
@Service("userService")
public class UserService implements IUserService {

	@Autowired
	IUserRepository userRepository;

	@Override
	public User createUser(User user) {
		// TODO Auto-generated method stub
		return userRepository.save(user);
	}

	@Override
	public User getUser(Long userId) {
		// TODO Auto-generated method stub
		return userRepository.findById(userId).get();
	}

	@Override
	public User updateUser(User user) {
		// TODO Auto-generated method stub
		return userRepository.save(user);
	}

	@Override
	public void deleteUser(Long userId) {
		
		 userRepository.deleteById(userId);
		
	}
}
