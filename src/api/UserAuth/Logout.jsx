import React from "react";
import styles from "./styles/logout.module.css";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./../../contexts/authcontext/AuthContextProvider";

function Logout() {
  const { logout, currentUser } = useAuth();
  const navigate = useNavigate();

  async function logoutUser() {
    try {
      await logout();
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      {currentUser === null ? (
        <div>
          <button
            type="button"
            className={styles.logoutButton}
            onClick={logoutUser}
          >
            Login
          </button>
        </div>
      ) : (
        <div>
          <button
            type="button"
            className={styles.logoutButton}
            onClick={logoutUser}
          >
            Logout
          </button>
        </div>
      )}
    </>
  );
}

export default Logout;
