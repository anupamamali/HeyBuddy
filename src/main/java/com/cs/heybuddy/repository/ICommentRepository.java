package com.cs.heybuddy.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.cs.heybuddy.model.Comment;
@Repository("commentRepository")
public interface ICommentRepository extends JpaRepository<Comment, Long> {
  
	List<Comment> findByGroupIdOrderByCreatedOnDesc(Long groupId);
}
