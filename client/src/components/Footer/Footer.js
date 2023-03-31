import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import decode from "jwt-decode";

import styles from "./Footer.module.css";

function Footer() {
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    let token = localStorage.getItem("reel_dreams_jwt");
    const decodedToken = decode(token);

    if (decodedToken.admin === true) {
      setIsAdmin(true);
    } else {
      setIsAdmin(false);
    }
  }, []);

  return (
    <div className={styles.container}>
      {isAdmin ? (
        <Link className={styles.link} to="/admin">
          Admin
        </Link>
      ) : (
        ""
      )}
      <Link className={styles.link} to="/bookPrivateScreening">
        Book a Private Screen
      </Link>
      <Link className={styles.link} to="#">
        Contact Us
      </Link>
    </div>
  );
}

export default Footer;
