import React from 'react';
import "../../styles/loginAndSign-upStyles/signUp.css"

// Sign up page

function SignUp() {
    return (
        <form>
            <label for="first-name">First Name</label>
            <input id="first-name" type="text" placeholder="Enter first name"></input>
            <label for="last-name">Last Name</label>
            <input id="last-name" type="text" placeholder="Enter last name"></input>
            <label for="contact">Mobile Number</label>
            <input id="contact" type="number" placeholder="Enter phone number"></input>
            <input id="email" type="email" placeholder="example@gmail.com"></input>
        </form>
    );   
}

export default SignUp;