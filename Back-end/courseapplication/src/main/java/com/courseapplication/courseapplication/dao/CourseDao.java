package com.courseapplication.courseapplication.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.courseapplication.courseapplication.entity.Course;

public interface CourseDao extends JpaRepository<Course, Long> {
	  
	

}
