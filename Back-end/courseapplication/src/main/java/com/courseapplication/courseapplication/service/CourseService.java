package com.courseapplication.courseapplication.service;

import java.util.List;

import com.courseapplication.courseapplication.entity.Course;

public interface CourseService {

	/* -In this interface, we will write a method which is abstract
	 and will return the list of courses
	 -We cant write body bocoz this as an interface
	*/
	
	//we are just giving name for loose coupling
	   public List<Course> getCourses();
	   
	   public Course getCourse(long courseId);
	   
	   public Course addCourse(Course course);
	   
	   public Course updateCourse(Course course);
	   
	   public void deleteCourse(long parseLong);
}

    
