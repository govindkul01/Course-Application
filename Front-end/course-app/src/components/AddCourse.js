import axios from "axios";
import React, { Fragment, useEffect, useState } from "react";
import { Button, Container, Form, FormGroup, Input } from "reactstrap";
import base_url from "../API/bootapi";
import { toast } from "react-toastify";

const AddCourse = () =>{
    useEffect(()=> {
        document.title="Add Course || Learn React";
      }, []);

        const[courses, setCourses]=useState({});

        //Function to handle form
         const handleForm =(e)=>{
            console.log(courses);
            //calling function here
            postDataOnServer(courses);
            e.preventDefault();
         };

         //Function to post data on server
              const postDataOnServer =(data) => {
              axios.post(`${base_url}/courses`, data).then(
                (response) => {
                    console.log(response);
                    console.log("success");
                    toast.success("Data added successfully",  { position: "top-right", autoClose: 3000});
                
            },
            (error) => {
                    console.log(error);
                    console.log("error");
                    toast.error("Something went wrong", {position: "top-right", autoClose: 3000});
            }
            );
         };

         return(

        <Fragment>
            <h1 className="text-center my-3">Fill course detail</h1>
            <Form onSubmit={handleForm}>
                <FormGroup>
                    <label for="userId">Course Id</label>
                    <Input 
                    type="text" 
                    placeholder="Enter here" 
                    name="UserId" 
                    id="userId"
                    onChange={(e)=>{ 
                        setCourses({...courses, id:e.target.value});
                    }}
                    />
                </FormGroup>

                <FormGroup>
                    <label for="title">Course title</label>
                    <Input 
                    type="text" 
                    placeholder="Enter title here" 
                    id="title"
                    onChange={(e)=>{
                        setCourses({...courses, title:e.target.value});
                    }} />
                </FormGroup>

                <FormGroup>
                    <label for="description">Course Description</label>
                    <Input 
                    type="textarea" 
                    placeholder="Enter description" 
                    id="description"
                    style={{height: 150}}
                    onChange={(e)=>{
                        setCourses({...courses, description:e.target.value});
                    }} />
                </FormGroup>

                <Container className="text-center">
                    <Button type="submit" color="success" style={{marginRight: '20px'}}>Add Course</Button>
                    <Button type="reset" color="warning">Clear</Button>
                </Container>
            </Form>
        </Fragment>
    )
}
export default AddCourse;