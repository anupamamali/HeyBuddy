package com.cs.heybuddy.model;

import java.io.Serializable;
import java.time.ZonedDateTime;
import java.util.Date;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
@Entity
@Table(name = "GROUP_HEYBUDDY")
public class Group implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	@Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Long groupId;
	
	 @Column(name = "description")
    private String description;
    
    @Column(name = "type")
    private String type;
    
    @Column(name = "name")
    private String name;
    
    @Column(name = "createdOn")
    @Temporal(TemporalType.TIMESTAMP)
    private Date createdOn;
    
    @Column(name = "status")
    private Boolean status;
     
	
    @OneToOne	
    @JoinColumn(name ="createdBy")
    private User createdBy;
    
    @ManyToMany(cascade = CascadeType.ALL)
    @JoinTable(
      name = "USERS_GROUPS", 
      joinColumns = @JoinColumn(name = "groupId"), 
      inverseJoinColumns = @JoinColumn(name = "Id"))
    private Set<User> users;
    
	public Long getGroupId() {
		return groupId;
	}

	public void setGroupId(Long grupId) {
		this.groupId = grupId;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}


	public Boolean getStatus() {
		return status;
	}

	public void setStatus(Boolean status) {
		this.status = status;
	}

	public Date getCreatedOn() {
		return createdOn;
	}

	public void setCreatedOn(Date createdOn) {
		this.createdOn = createdOn;
	}

	public User getCreatedBy() {
		return createdBy;
	}

	public void setCreatedBy(User createdBy) {
		this.createdBy = createdBy;
	}

	public Set<User> getUsers() {
		return users;
	}

	public void setUsers(Set<User> users) {
		this.users = users;
	}

	
    
    
}
