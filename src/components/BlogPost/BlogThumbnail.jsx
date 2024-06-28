import React from "react";
import styles from "./thumbnail.module.css";
import { useNavigate } from "react-router-dom";

function BlogThumbnail() {
  const navigate = useNavigate();
  const handleReadBlog = () => {
    navigate("/blogpost");
  };
  return (
    <div className={styles.blogpost_thumbnail}>
      <div className={styles.blogpost_thumbnail_image}>
        <img
          src="https://images.unsplash.com/photo-1541560052-77ec1bbc09f7?q=80&w=1798&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="blogpost"
        />
      </div>
      <div className={styles.blogpost_thumbnail_text}>
        <h3>Blog Title</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          doloremque, quas, quod, quae nesciunt magnam quos voluptatum
          repudiandae, aperiam quia autem. Quisquam doloremque, quas, quod, quae
          nesciunt magnam quos voluptatum repudiandae, aperiam quia autem.
        </p>
        <button className={styles.button} onClick={handleReadBlog}>
          Read More
        </button>
      </div>
    </div>
  );
}

export default BlogThumbnail;
