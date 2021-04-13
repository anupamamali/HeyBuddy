package com.cs.heybuddy.service;

import java.util.List;

import com.cs.heybuddy.model.Comment;

public interface ICommentService {
	
	public Comment createComment(Comment comment);
	
	public Comment getComment(Long commentId);
	
	public Comment updateComment(Comment comment);
	
	public void deleteComment(Long commentId);

	public List<Comment> getGroupComment(Long groupId);
	
	
	
	

}
