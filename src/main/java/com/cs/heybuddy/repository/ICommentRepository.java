package com.cs.heybuddy.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.cs.heybuddy.model.Comment;
@Repository("commentRepository")
public interface ICommentRepository extends CrudRepository<Comment, Long> {
  
	List<Comment> getByGroupId(Long groupId);
}
