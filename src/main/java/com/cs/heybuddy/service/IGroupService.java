package com.cs.heybuddy.service;

import com.cs.heybuddy.model.Group;

public interface IGroupService {
	
	public Group createGroup(Group group);
	
	public Group getGroup(Long groupId);
	
	public Group updateGroup(Group group);
	
	public void deleteGroup(Long groupId);
	

}
