import React, { useState, useEffect } from "react";
import Course from "./Course";
import base_url from "../API/bootapi";
import axios from "axios";
import { toast } from "react-toastify";

const AllCourses = () => {

    useEffect( () =>{
        document.title="All Courses || Learn React";
    }, []);     
    
    //function to call server - get courses from database
    const getAllCoursesFromServer=()=>{
        axios.get(`${base_url}/courses`).then(
            (response)=> {
                //For success
              console.log(response.data);
              setCourses(response.data);
              toast.success("Courses loaded successfully", {toastId: "success1", theme: "dark", position: "bottom-center", autoClose: 3000});
        },
        (error) => {
            //For error
            console.log(error);
            toast.error("Something went wrong", {position: "bottom-center", autoClose: 3000} );
        }
        );
    };

    //calling loading course function

    useEffect(()=>{
        getAllCoursesFromServer();
    },[]);

    const[courses,setCourses]=useState({});

    const updateCourse=(id) =>{
setCourses(courses.filter((c)=> c.id != id));
    }


    return (
        <div>

            <h1>All Courses</h1>
            <p>List of all courses are as follows</p>

            { courses.length > 0 ?
             courses.map((item) => <Course key={item.id} course={item} update={updateCourse} />)
             : "No courses"
            }
        </div>

    );
}
export default AllCourses;