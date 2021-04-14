package com.cs.heybuddy.controller;

import com.cs.heybuddy.model.Group;
import com.cs.heybuddy.model.User;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RestController;

import com.cs.heybuddy.model.Event;
import com.cs.heybuddy.service.IEventService;
import com.cs.heybuddy.service.IGroupService;
import com.cs.heybuddy.service.IUserService;
import com.cs.heybuddy.service.UserService;

import org.springframework.web.client.RestTemplate;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.Date;
import java.util.List;

@RestController
public class EventController {
	
	@Autowired
	IEventService eventService;
	@Autowired
	IGroupService groupService;
	@Autowired
	IUserService userService;

	@PostMapping("/event")
	public ResponseEntity<Event> createEvent(@RequestBody Event event) throws URISyntaxException {
		User userObj = userService.getUser(event.getCreatedBy().getId());
		event.setCreatedBy(userObj);
		Event newevent = eventService.createEvent(event);
		if (newevent != null) {
			Group group = new Group();
			group.setName("Group_" + event.getName());
			group.setDescription("Group_" + event.getDescription());
			
		
			group.setCreatedBy(userObj);
			group.getUsers().add(userObj);
			group = groupService.createGroup(group);
			newevent.setGroup(group);
			eventService.updateEvent(newevent);
		}
		return ResponseEntity.status(HttpStatus.OK).body(newevent);

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

	@GetMapping("/event")
	public List<Event> getAllEvent() {
		return  eventService.getAllEvent();
	}
	
	@DeleteMapping("/event/{id}")
	public ResponseEntity<String> deleteEvent(@PathVariable(value = "id") Long id) {

		eventService.deleteEvent(id);
		return ResponseEntity.status(HttpStatus.OK)
				.body("Event deleted successfully ");

	}

}
