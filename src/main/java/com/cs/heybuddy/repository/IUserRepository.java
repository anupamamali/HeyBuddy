package com.cs.heybuddy.repository;

import java.util.Optional;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.cs.heybuddy.model.User;
@Repository("userRepository")
public interface IUserRepository extends CrudRepository<User, Long> {
	
	Optional<User> findByName(String userName);

	Boolean existsByName(String userName);

	Boolean existsByEmail(String email);

}
