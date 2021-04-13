package com.cs.heybuddy.controller;

import java.util.List;

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

import com.cs.heybuddy.model.Comment;
import com.cs.heybuddy.model.Event;
import com.cs.heybuddy.model.Group;
import com.cs.heybuddy.service.ICommentService;
import com.cs.heybuddy.service.IEventService;
import com.cs.heybuddy.service.IGroupService;

@RestController
public class GroupController {
	
	@Autowired
	IGroupService groupService;
	@Autowired
	ICommentService commentService;

	@PostMapping("/group")
	public ResponseEntity<Group> createGroup(@RequestBody Group group) {

		 return ResponseEntity.status(HttpStatus.OK)
					.body(  groupService.createGroup(group));

	}
	
	@PutMapping("/group")
	public ResponseEntity<Group> updateGroup(@RequestBody Group group) {

		 return ResponseEntity.status(HttpStatus.OK)
					.body(groupService.updateGroup(group));

	}
	
	@GetMapping("/group/{id}")
	public ResponseEntity<Group> getGroup(@PathVariable(value = "id") String id) {

		 return ResponseEntity.status(HttpStatus.OK)
					.body(  groupService.getGroup(Long.parseLong(id)));

	}
	
	@DeleteMapping("/group/{id}")
	public ResponseEntity<String> deleteGroup(@PathVariable(value = "id") Long id) {

		groupService.deleteGroup(id);
		return ResponseEntity.status(HttpStatus.OK)
				.body("Group deleted successfully");

	}
	@GetMapping("/group/{id}/comments")
	public ResponseEntity<List<Comment>> getGroupComment(@PathVariable(value = "id") Long id) {

		 return ResponseEntity.status(HttpStatus.OK)
					.body( commentService.getGroupComment(id));

	}
	
}
