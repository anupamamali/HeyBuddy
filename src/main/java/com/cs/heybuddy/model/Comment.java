package com.cs.heybuddy.model;

import java.io.Serializable;
import java.time.ZonedDateTime;
import java.util.Date;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

@Entity
@Table(name = "COMMENTS")
public class Comment implements Serializable{

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	@Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Long commentId;
    
    @Column(name = "description", length = 500)
    private String description;
    
    @Column(name = "type", length = 500)
    private String type;
    
    @Column(name = "name", length = 500)
    private String name;
    
    @Column(name = "createdON")
    @Temporal(TemporalType.TIMESTAMP)
    private Date createdOn;
    
    @OneToOne(cascade = CascadeType.ALL)	
    @JoinColumn(name ="createdBy")
    private User createdBy;
    
    
    @Column(name = "status")
    private Boolean status;

    @Column(name = "groupId")
    private Long groupId;
    
	public Long getCommentId() {
		return commentId;
	}

	public void setCommentId(Long commentId) {
		this.commentId = commentId;
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
    
      
}
