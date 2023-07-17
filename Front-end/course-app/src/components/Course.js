import React from "react";
import axios from "axios";
import { Card, CardBody, CardTitle, CardText, CardFooter, Button, Container, CardSubtitle } from 'reactstrap'
import base_url from "../API/bootapi";
import { toast } from "react-toastify";

const Course = ({ course, update }) => {

    const deleteCourse = (id) => {
        axios.delete(`${base_url}/courses/${id}`).then(
            (Response) => {
                toast.success("course deleted", { position: "top-center", autoClose: 3000 });
                update(id);
            },
            (error) => {
                toast.error("course not deleted !! server problem", { position: "top-center" });
            })
    };

    return (
        <Card className="text-center">
            <CardBody>
                <CardSubtitle style={{ fontWeight: 'bold' }}>{course.title}</CardSubtitle>
                <CardText >{course.description}</CardText>
                <Container className="text-center">
                    <Button color="danger"
                        onClick={() => {
                            deleteCourse(course.id)
                        }} style={{ marginRight: '20px' }}>Delete</Button>

                    <Button color="warning">Update</Button>
                </Container>
            </CardBody>
        </Card>
    )
}

export default Course;