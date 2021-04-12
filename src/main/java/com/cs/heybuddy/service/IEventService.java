package com.cs.heybuddy.service;

import com.cs.heybuddy.model.Event;

import java.util.List;

public interface IEventService {
	
	public Event createEvent(Event event);
	
	public Event getEvent(Long eventId);
	public List<Event> getAllEvent();

	public Event updateEvent(Event event);
	
	public void deleteEvent(Long eventId);

}
