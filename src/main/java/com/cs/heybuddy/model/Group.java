package com.cs.heybuddy.model;

import java.io.Serializable;
import java.time.ZonedDateTime;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;
@Entity
@Table(name = "GROUP_HEYBUDDY")
public class Group implements Serializable {

	
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	@Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Long grupId;
	
	 @Column(name = "description")
    private String description;
    
    @Column(name = "type")
    private String type;
    
    @Column(name = "name")
    private String name;
    
    @Column(name = "createdon")
    private ZonedDateTime createdon;
    
    @Column(name = "status")
    private Boolean status;

	
    @OneToOne	
    @JoinColumn(name ="createdby")
    private User createdby;
    
	public Long getGrupId() {
		return grupId;
	}

	public void setGrupId(Long grupId) {
		this.grupId = grupId;
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

	public ZonedDateTime getCreatedon() {
		return createdon;
	}

	public void setCreatedon(ZonedDateTime createdon) {
		this.createdon = createdon;
	}

	

	public Boolean getStatus() {
		return status;
	}

	public void setStatus(Boolean status) {
		this.status = status;
	}

	public User getCreatedby() {
		return createdby;
	}

	public void setCreatedby(User createdby) {
		this.createdby = createdby;
	}
    
    
}