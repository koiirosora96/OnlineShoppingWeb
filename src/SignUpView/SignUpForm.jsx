import React from 'react';
import { useForm } from "react-hook-form";

export default function SignUpForm(props){
    const { register, handleSubmit, watch, formState: { errors } } = useForm({
        defaultValues:{
            email: "example@gmail.com",
            userName: "kotarou ichi",
        }
    });
    const onSubmit = data => console.log(data);

    console.log(errors)

    return (
        <>
            <div className="signUp">
                <form className="signUpForm" onSubmit={handleSubmit((data) => {console.log(data)})}>
                    <div className="signUpForm-X" onClick={props.toggleShowSignUpForm}>
                        X
                    </div>
                    <div className="input-form">
                        <label htmlFor="email">Email :</label>
                        <input 
                        {...register("email", { required: "this is required" })} 
                        type="email" 
                        id="email" 
                        placeholder="Your email"/>
                        <p>{errors.email?.message}</p>
                    </div>
                    <div className="input-form">
                        <label htmlFor="userName">User name :</label>
                        <input 
                        {...register("userName", { 
                            required: "this is required", 
                            minLength: {
                            value: 4,
                            message: "min length is 4"
                        } })} 
                        type="userName" 
                        id="userName" 
                        placeholder="Enter your user name"/>
                        <p>{errors.userName?.message}</p>

                    </div>
                    <div className="input-form">
                        <label htmlFor="pwd">Password :</label>
                        <input 
                        {...register("password", { 
                        required: "this is required", 
                        minLength: {
                            value: 8,
                            message: "min length is 8"
                        } })} 
                        type="password" 
                        id="pwd" 
                        placeholder="Enter password"/>
                        <p>{errors.password?.message}</p>
                    </div>
                    <button type="submit" className='input-form-btn'>Register</button>
                </form>
            </div>
        </>
    )
}