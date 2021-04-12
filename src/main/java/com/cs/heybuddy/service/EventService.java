package com.cs.heybuddy.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cs.heybuddy.model.Event;
import com.cs.heybuddy.repository.IEventRepository;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.Map;

@Service("eventService")
public class EventService implements IEventService {

	@Autowired
	public IEventRepository eventRepository;
	
	@Override
	public Event createEvent(Event event) {
		// TODO Auto-generated method stub
		return eventRepository.save(event);
	}

	@Override
	public Event getEvent(Long eventId) {
		// TODO Auto-generated method stub
		return eventRepository.findById(eventId).get();
	}

	@Override
	public List<Event> getAllEvent() {
		// TODO Auto-generated method stub
		ArrayList<Event> list = new ArrayList<>();
		Iterable<Event> all = eventRepository.findAll();
		Iterator<Event> iterator = all.iterator();
		while(iterator.hasNext()){
			list.add(iterator.next());
		}
		return list;
	}


	@Override
	public Event updateEvent(Event event) {
		// TODO Auto-generated method stub
		return eventRepository.save(event);
		 
	}

	@Override
	public void deleteEvent(Long eventId) {
		eventRepository.deleteById(eventId);
		
	}

}
