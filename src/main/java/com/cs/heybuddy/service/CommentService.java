package com.cs.heybuddy.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cs.heybuddy.model.Comment;
import com.cs.heybuddy.repository.ICommentRepository;
@Service("commentService")
public class CommentService implements ICommentService {
	
	 @Autowired
	ICommentRepository commentRepository;

	@Override
	public Comment createComment(Comment comment) {
		// TODO Auto-generated method stub
		return commentRepository.save(comment);
	}

	@Override
	public Comment getComment(Long commentId) {
		// TODO Auto-generated method stub
		return commentRepository.findById(commentId).get();
	}

	public List<Comment> getGroupComment(Long groupId) {
		// TODO Auto-generated method stub
		return commentRepository.findByGroupIdOrderByCreatedOnDesc(groupId);
	}
	@Override
	public Comment updateComment(Comment comment) {
		// TODO Auto-generated method stub
		return commentRepository.save(comment);
	}

	@Override
	public void deleteComment(Long commentId) {
		// TODO Auto-generated method stub
		 commentRepository.deleteById(commentId);;
	}
	 

}
