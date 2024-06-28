import React from "react";
import styles from "./newsletter.module.css";

function Newsletter() {
  return (
    <div className={styles.newsletter}>
      <form>
        <label htmlFor="email"></label>
      </form>
    </div>
  );
}

export default Newsletter;
