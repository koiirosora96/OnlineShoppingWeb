import React from 'react';

export default function SignUpForm(props){
    return (
        <>
            <div className="signUp">
                <form className="signUpForm">
                    <div className="signUpForm-X" onClick={props.toggleShowSignUpForm}>
                        X
                    </div>
                    <div className="input-form">
                        <label htmlFor="email">Email :</label>
                        <input type="email" id="email" placeholder="Your email"/>
                    </div>
                    <div className="input-form">
                        <label htmlFor="userName">User name :</label>
                        <input type="userName" id="userName" placeholder="Enter your user name"/>
                    </div>
                    <div className="input-form">
                        <label htmlFor="pwd">Password :</label>
                        <input type="password" id="pwd" placeholder="Enter password"/>
                    </div>
                    <button className='input-form-btn'>Submit</button>
                </form>
            </div>
        </>
    )
}