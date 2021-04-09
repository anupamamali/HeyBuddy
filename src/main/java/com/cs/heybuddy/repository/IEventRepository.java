package com.cs.heybuddy.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.cs.heybuddy.model.Event;
@Repository("eventRepository")
public interface IEventRepository extends CrudRepository<Event, Long> {

}
