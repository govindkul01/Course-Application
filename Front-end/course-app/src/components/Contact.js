import React, { useEffect } from "react";

const Contact =()=>{
    useEffect( () =>{
        document.title="Contact Us || Learn React";
    }, []); 

    return(
        <div>
             <h2>Contact details</h2>
            <h2>Govind Kulkarni - 7028588850</h2>
        </div>


    )
}
export default Contact;