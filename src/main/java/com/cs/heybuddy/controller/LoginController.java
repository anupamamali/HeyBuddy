package com.cs.heybuddy.controller;
import java.util.HashMap;
import java.util.Map;
import java.util.Random;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class LoginController {

   @SuppressWarnings("unchecked")
	@GetMapping("/login")
	public ResponseEntity<Map> login() {
		Map userToken = new HashMap<>();
		userToken.put("token",new Random().toString());
		 return ResponseEntity.status(HttpStatus.OK)
					.body(userToken);


	}
}
