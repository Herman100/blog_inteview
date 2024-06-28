import React from "react";
import styles from "../Blogs/blogs.module.css";
import BlogThumbnail from "../../components/BlogPost/BlogThumbnail";

function Blogs() {
  return (
    <div className={styles.blogs}>
      <h1 className={styles.header}>Read. Learn. Grow</h1>
      <div className={styles.latesposts}>
        <BlogThumbnail />
        <BlogThumbnail />
        <BlogThumbnail />
        <BlogThumbnail />
        <BlogThumbnail />
        <BlogThumbnail />
      </div>
    </div>
  );
}

export default Blogs;
