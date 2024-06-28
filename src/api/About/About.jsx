import React from "react";
import styles from "./about.module.css";

function About() {
  return (
    <>
      <div className={styles.about}>
        <h1>Know Everything about deDailyTech</h1>
        <p>
          This is a simple blog application created using React and JSON Server.
          The application has a homepage, about page, and a blog page. The
          homepage displays all the blog posts. The about page displays
          information about the application. The blog page displays a single
          blog post. The application uses JSON Server to store the blog posts.
          The application also uses React Router to handle routing.
        </p>
      </div>
    </>
  );
}

export default About;
