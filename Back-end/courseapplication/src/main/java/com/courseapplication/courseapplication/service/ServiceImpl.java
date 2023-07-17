package com.courseapplication.courseapplication.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.courseapplication.courseapplication.dao.CourseDao;
import com.courseapplication.courseapplication.entity.Course;

@Service
public class ServiceImpl implements CourseService {

	@Autowired
	private CourseDao courseDao;
	
	@Override
	public List<Course> getCourses() {

		return courseDao.findAll();
	}

	@Override
	public Course getCourse(long courseId) {
		
		return courseDao.getOne(courseId);
	}

	@Override
	public Course addCourse(Course course) {
		courseDao.save(course);
		return course;

			
		}
		  


	@Override
	public Course updateCourse(Course course) {
		courseDao.save(course);
		return course;
	}

	@Override
	public void deleteCourse(long parseLong) {
		Course entity=courseDao.getOne(parseLong);
		courseDao.delete(entity);
		
	}
}


	//We will create a list to store data temperory
	
	/*
	 * List<Course> list;
	 
	
	public ServiceImpl() {
		
		list= new ArrayList<>(); //List instantiated or Object created
		list.add(new Course(145, "Core Java",  "This course Contains Basics of java"));
		list.add(new Course(155, "Spring boot", "Creating a Spring boot course"));
	}
	
	@Override
	public List<Course> getCourses() {
		
		return list;
	}

	@Override
	public Course getCourse(long courseId) {
		 
		Course c = null;
		//Traversing course list with for each loop
		for(Course course : list) {
			
			if(course.getId()==courseId) {
				c=course;
				break;
			}
		}
		
		return c;
	}

	@Override
	public Course addCourse(Course course) {
		list.add(course);
		
		return course;
	}

	@Override
	public Course updateCourse(Course course) {
		
		list.forEach(e -> {
			if(e.getId() == course.getId()) {
				e.setTitle(course.getTitle());
				e.setDescription(course.getDescription());
			}
			
		}); 
		return course;
	}

	@Override
	public void deleteCourse(long parseLong) {
		
		   list= this.list.stream().filter(e -> e.getId() != parseLong).collect(Collectors.toList());
		  
		
	}
	*/
