import React, { useEffect } from "react";
import {Container, Button } from 'reactstrap'


const Home = () => {

          useEffect(()=> {
            document.title="Home || Learn React";
          }, []);
    return(

        <div className="text-center" style={{ backgroundColor: "lightblue"}}>
            <h1>Learn React with Govind</h1>
            <p>This course is developed by Govind for learning purpose. Backend is on Spring boot and 
                front end is on react js
            </p>
            <Container>
                <Button color="primary" outline>Start using my application</Button>
            </Container>
             

        </div>
    )
}
export default Home;