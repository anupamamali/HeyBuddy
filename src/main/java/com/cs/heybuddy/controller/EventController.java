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

import com.cs.heybuddy.model.Event;
import com.cs.heybuddy.service.IEventService;

@RestController
public class EventController {
	
	@Autowired
	IEventService eventService;

	@PostMapping("/event")
	public ResponseEntity<Event> createEvent(@RequestBody Event event) {

		 return ResponseEntity.status(HttpStatus.OK)
					.body( eventService.createEvent(event));

	}
	
	@PutMapping("/event")
	public ResponseEntity<Event> UpdateUser(@RequestBody Event event) {

		  return ResponseEntity.status(HttpStatus.OK)
				.body(eventService.updateEvent(event));

	}
	
	@GetMapping("/event/{id}")
	public ResponseEntity<Event> getEvent(@PathVariable(value = "id") String id) {

		 return ResponseEntity.status(HttpStatus.OK)
					.body( eventService.getEvent(Long.parseLong(id)));

	}
	
	@DeleteMapping("/event/{id}")
	public ResponseEntity<String> deleteEvent(@PathVariable(value = "id") Long id) {

		eventService.deleteEvent(id);
		return ResponseEntity.status(HttpStatus.OK)
				.body("Event deleted successfully ");

	}

}
