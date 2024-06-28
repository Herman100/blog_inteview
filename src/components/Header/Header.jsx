"use client";
import React from "react";
import styles from "./header.module.css";
import { useAuth } from "../../contexts/authcontext/AuthContextProvider";
import { Link, useNavigate } from "react-router-dom";

export default function Header() {
  const { currentUser, logout } = useAuth();

  const navigate = useNavigate();

  const handleLogout = async (e) => {
    e.preventDefault();
    try {
      await logout();
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  // console.log(currentUser);
  return (
    <div className={styles.header}>
      <div>
        <Link to="/" className={styles.logo}>
          deDailyTech
        </Link>
      </div>
      <div className={styles.links}>
        <Link className={styles.link} to="/">
          Home
        </Link>
        <Link className={styles.link} to="/about">
          About
        </Link>
        <Link className={styles.link} to="/blogs">
          Blogs
        </Link>
        <Link className={styles.link} to={currentUser ? "/write" : "/login"}>
          Write
        </Link>
        <Link className={styles.link} to="/profile">
          {currentUser ? "Profile" : ""}
        </Link>
      </div>
      {currentUser ? (
        <>
          <button className={styles.logout} onClick={handleLogout}>
            Logout
          </button>
        </>
      ) : (
        <button className={styles.login} onClick={() => navigate("/login")}>
          Login
        </button>
      )}
    </div>
  );
}
