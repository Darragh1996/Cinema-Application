import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { justAxios } from "../utils/axios.js";

function userLogin() {
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
    <div>
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <label>Email</label>
        <br />
        <input
          name="email"
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />

        <label>Password</label>
        <br />
        <input
          name="password"
          type="text"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <input className="submitButton" type="submit" value="Login" />
      </form>
    </div>
  );
}

export default userLogin;
