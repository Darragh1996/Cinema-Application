//want to select all user data and loop thrpugh each to check if 
//username is in the database and for password to match

import React, { useEffect, useState } from "react";

import { justAxios } from "../utils/axios.js";


function userLogin() {
    const [users, setUsers] = useState([]);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    useEffect(() => {
        justAxios()
            .get("/users").then((response) => {
                setUsers(response.data);
            });
    }, []);

    let handleSubmit = async (e) => {
        e.preventDefault();
        try {
                console.log(users);
            }
        catch (err) {
                console.log(err);
            }
        };
        return (
            <div>

                <form onSubmit={e => { handleSubmit(e) }}>

                    <label>Username</label>
                    <br />
                    <input
                        name='username'
                        type='text'
                        value={username}
                        onChange={e => setUsername(e.target.value)}
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
                    <input
                        className='submitButton'
                        type='submit'
                        value='Login'
                    />
                </form>
            </div>
        )

    }


    export default userLogin;