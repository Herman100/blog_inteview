import React from "react";
import styles from "./footer.module.css";
import { AiFillInstagram } from "react-icons/ai";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  const date = new Date().getFullYear();
  return (
    <>
      <div className={styles.footer}>
        <div className={styles.copyright}>
          <p>
            © {date}{" "}
            <Link to="/" className={styles.logo}>
              deDailyTech
            </Link>
            . All rights reserved.
          </p>
        </div>
      </div>
    </>
  );
}
