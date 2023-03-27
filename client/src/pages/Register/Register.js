import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

import { justAxios } from "../../utils/axios.js";
import styles from "./Register.module.css";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [number, setNumber] = useState("");

  const navigate = useNavigate();

  let handleSubmit = async (e) => {
    e.preventDefault();
    console.log({
      name: name,
      email: email,
      password: password,
      phoneNo: number,
    });
    try {
      justAxios()
        .post("/users", {
          name: name,
          email: email,
          password: password,
          phoneNo: number,
        })
        .then((res) => {
          navigate("/login");
        });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className={styles.container}>
      <h1>Reel Dreams Cinema</h1>
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
        className={styles.loginForm}
      >
        <label htmlFor="name">Name</label>
        <input
          id="name"
          name="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label htmlFor="password">Password</label>
        <input
          id="password"
          name="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <label htmlFor="number">Phone Number</label>
        <input
          id="number"
          name="number"
          type="text"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          required
        />

        <button type="submit">Register</button>
      </form>
      <p>
        Already have an account? <Link to="/login">Login</Link>
      </p>
    </div>
  );
}

export default Register;
