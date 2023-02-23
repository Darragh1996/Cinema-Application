import React, { useState } from "react";

import { justAxios } from "../utils/axios.js";

function createUser() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [number, setNumber] = useState("");

    let handleSubmit = async (e) => {
        e.preventDefault();
        console.log({
            name: name,
            email: email,
            password:password,
            phoneNo: number,
        })
        try {

            justAxios()
                .post("/users", {
                    name: name,
                    email: email,
                    password:password,
                    phoneNo: number,
                })
                .then((res) => {
                    console.log(res)
                });
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <form onSubmit={e => { handleSubmit(e) }}>

            <label>Name</label>
            <br />
            <input
                name='name'
                type='text'
                value={name}
                onChange={e => setName(e.target.value)}
            />
            <br />

            <label>Email</label>
            <br />
            <input
                name='email'
                type='email'
                value={email}
                onChange={e => setEmail(e.target.value)}
            />
            <br />

            <label>Password</label>
            <br />
            <input
                name='password'
                type='text'
                value={password}
                onChange={e => setPassword(e.target.value)}
            />
            <br />

            <label>Phone Number</label>
            <br />
            <input
                name='number'
                type='text'
                value={number}
                onChange={e => setNumber(e.target.value)}
            />
            <br />

            <input
                className='submitButton'
                type='submit'
                value='Create User'
            />
        </form>
    )
}

export default createUser;