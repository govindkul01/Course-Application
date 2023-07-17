package com.courseapplication.courseapplication.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.courseapplication.courseapplication.entity.Course;
import com.courseapplication.courseapplication.service.CourseService;

@CrossOrigin(origins = {"http://localhost:3000"})
@RestController
public class MyCotnroller {
	
	//declare a variable of parent class of CourseImpl i.e. CourseService interface type
	//Before calling getCourse() method, we need to create an object of CourseImpl class
	@Autowired
	private CourseService courseService;
	
	//Get the courses
	@GetMapping("/courses")
	public List<Course> getCourses(){                      //here we will return list
		
	    return this.courseService.getCourses();      //controller will call service to get all courses
	}
	
	//Getting a course by particular Id
	@GetMapping("/courses/{courseId}")
	public Course getCourse(@PathVariable String courseId) {
		
		return this.courseService.getCourse(Long.parseLong(courseId));
	}
	
	//Adding a new course to list
	@PostMapping("/courses")
	public Course addCourse(@RequestBody Course course) {
		
		return this.courseService.addCourse(course);
		
	}
	
	//Updating an existing course from list
	@PutMapping("/course")
	public Course updateCourse(@RequestBody Course course) {
		
		return this.courseService.updateCourse(course);
		
	}
	
	//Deleting the course 
	@DeleteMapping("/courses/{courseId}")
	public ResponseEntity<HttpStatus> deleteCourse(@PathVariable String courseId) {
		
		try {
			this.courseService.deleteCourse(Long.parseLong(courseId));
			return new ResponseEntity<>(HttpStatus.OK);
				}
		
		catch(Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
				
	}
}
