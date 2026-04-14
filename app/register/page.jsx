'use client'

import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase/firebase.config";

export default function Register(){

    const [form, setForm] = useState({
        name:"",
        email:"",
        phone:""
    });

    const handleChange = (e) => {
        setForm({...form, [e.target.name]: e.target.value});
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try{
            await addDoc(collection(db,"registrations"),{
                ...form,
                timestamp: new Date()

            });

            alert("Registration successful");

            setForm({
                name:"",
                email:"",
                phone:""
            });
        }catch(error){
            console.error(error);
            alert("Error registering user");
            
        }
    };


    return (
        <div style={{padding:20}}>
            <h2>Register</h2>

            <form onSubmit={handleSubmit}>
                <input 
                    name="name" 
                    placeholder="Name"
                    value={form.name}
                    onChange={handleChange}
                />
                <br/>

                <input 
                    name="email" 
                    placeholder="Email"
                    value={form.email}
                    onChange={handleChange}
                />
                <br/>

                <input 
                    name="phone" 
                    placeholder="Phone Number"
                    value={form.phone}
                    onChange={handleChange}
                />
                <br/>

                <button type="submit">Sign Up</button>
            </form>
        </div>
    );
}