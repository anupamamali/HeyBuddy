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

import com.cs.heybuddy.model.Comment;
import com.cs.heybuddy.service.ICommentService;

import java.util.Date;

@RestController
public class CommentController {
	
	@Autowired
	ICommentService commentService;

	@PostMapping("/comment")
	public ResponseEntity<Comment> createComment(@RequestBody Comment comment) {

		comment.setCreatedOn(new Date());
		 return ResponseEntity.status(HttpStatus.OK)
					.body(commentService.createComment(comment));

	}
	
	@PutMapping("/comment")
	public ResponseEntity<Comment> updateComment(@RequestBody Comment comment) {

		 return ResponseEntity.status(HttpStatus.OK)
					.body(commentService.updateComment(comment));

	}
	
	@GetMapping("/comment/{id}")
	public ResponseEntity<Comment> getComment(@PathVariable(value = "id") String id) {

		 return ResponseEntity.status(HttpStatus.OK)
					.body( commentService.getComment(Long.parseLong(id)));

	}
	
	
	@DeleteMapping("/comment/{id}")
	public ResponseEntity<String> deleteComment(@PathVariable(value = "id") Long id) {

		commentService.deleteComment(id);
		return ResponseEntity.status(HttpStatus.OK)
				.body( "Comment deleted Successsfully");

	}


}
