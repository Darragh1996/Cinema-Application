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
      <h1 className={styles.formH1}>Reel Dreams Cinema</h1>
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
        className={styles.loginForm}
      >
        <label htmlFor="name" className={styles.formLabel}>
          Name
        </label>
        <input
          id="name"
          className={styles.formInput}
          name="name"
          type="text"
          placeholder="John Doe"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <label htmlFor="email" className={styles.formLabel}>
          Email
        </label>
        <input
          id="email"
          className={styles.formInput}
          name="email"
          type="email"
          placeholder="john@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label htmlFor="password" className={styles.formLabel}>
          Password
        </label>
        <input
          id="password"
          className={styles.formInput}
          name="password"
          type="password"
          placeholder="password123"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <label htmlFor="number" className={styles.formLabel}>
          Phone Number
        </label>
        <input
          id="number"
          className={styles.formInput}
          name="number"
          type="text"
          placeholder="123 456 7890"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          required
        />

        <button type="submit" className={styles.formButton}>
          Register
        </button>
      </form>
      <p>
        Already have an account? <Link to="/login">Login</Link>
      </p>
    </div>
  );
}

export default Register;
