package com.cs.heybuddy.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.cs.heybuddy.model.Comment;
import com.cs.heybuddy.model.User;
@Repository("userRepository")
public interface IUserRepository extends CrudRepository<User, Long> {

}
