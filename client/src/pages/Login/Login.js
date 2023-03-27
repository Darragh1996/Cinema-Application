import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

import { justAxios } from "../../utils/axios.js";
import styles from "./Login.module.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
      justAxios()
        .post("/users/login", {
          email: email,
          password: password,
        })
        .then((res) => {
          localStorage.setItem("reel_dreams_jwt", res.data.data.token);
          navigate("/");
        });
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className={styles.container}>
      <h1 className={styles.formH1}>Reel Dreams Cinema</h1>
      <form onSubmit={handleSubmit} className={styles.loginForm}>
        <label htmlFor="email" className={styles.formLabel}>
          Email
        </label>
        <input
          id="email"
          className={styles.formInput}
          name="email"
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          autoComplete="username"
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
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoComplete="current-password"
          required
        />
        <button type="submit" className={styles.formButton}>
          Login
        </button>
      </form>
      <p>
        Don't have an account? <Link to="/register">Sign up</Link>
      </p>
    </div>
  );
}

export default Login;
