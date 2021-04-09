package com.cs.heybuddy.service;

import com.cs.heybuddy.model.Event;

public interface IEventService {
	
	public Event createEvent(Event event);
	
	public Event getEvent(Long eventId);
	
	public Event updateEvent(Event event);
	
	public void deleteEvent(Long eventId);

}
