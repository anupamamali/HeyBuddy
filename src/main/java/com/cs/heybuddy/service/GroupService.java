package com.cs.heybuddy.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cs.heybuddy.model.Group;
import com.cs.heybuddy.repository.IGroupRepository;

@Service("groupService")
public class GroupService implements IGroupService {
	
	@Autowired
	IGroupRepository groupRepository ;

	@Override
	public Group createGroup(Group group) {
		return groupRepository.save(group);
	}

	@Override
	public Group getGroup(Long groupId) {
		return groupRepository.findById(groupId).get();
	}

	@Override
	public Group updateGroup(Group group) {
		return groupRepository.save(group);
	}

	@Override
	public void deleteGroup(Long groupId) {
		
		groupRepository.deleteById(groupId);
		
	}
	
	

}
