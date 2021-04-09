package com.cs.heybuddy.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.cs.heybuddy.model.User;
import com.cs.heybuddy.service.IUserService;

@RestController
public class UserController {
	@Autowired
	IUserService userService;

	@PostMapping("/user")
	public ResponseEntity<User> createUser(@RequestBody User user) {

	 return ResponseEntity.status(HttpStatus.OK)
	.body( userService.createUser(user));

	 }
	@PutMapping("/user")
	public ResponseEntity<User> updateUser(@RequestBody User user) {

	 return ResponseEntity.status(HttpStatus.OK)
	.body( userService.updateUser(user));

	 }
	@GetMapping("/user/{id}")
	public ResponseEntity<User> getUser(@PathVariable(value = "id") String id) {

	 return ResponseEntity.status(HttpStatus.OK)
	.body( userService.getUser(Long.parseLong(id)));

	}
	@DeleteMapping("/user/{id}")
	public ResponseEntity<String> deleteUser(@PathVariable(value = "id") Long id) {
	userService.deleteUser(id);
	return ResponseEntity.status(HttpStatus.OK)
	.body( "User deleted successfully ");

	 }
}
