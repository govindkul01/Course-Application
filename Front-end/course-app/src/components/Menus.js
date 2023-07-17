import React from "react";
import { Link } from "react-router-dom";
import { ListGroup } from "reactstrap";

const Menus = () =>{

    return(

        <ListGroup>
            <Link className="list-group-item list-group-item action" tag="a" to="/">
                Home
            </Link>
            <Link className="list-group-item list-group-item action" tag="a" to="/add">
                Add Courses
            </Link>
            <Link className="list-group-item list-group-item action" tag="a" to="/view">
                View Courses
            </Link>
            <Link className="list-group-item list-group-item action" tag="a" to="/about">
                About
            </Link>
            <Link className="list-group-item list-group-item action" tag="a" to="/contact">
                Contact Us
            </Link>
        </ListGroup>

    )
}

export default Menus;