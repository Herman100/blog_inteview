import React from "react";
import styles from "./home.module.css";
import { Link } from "react-router-dom";
import BlogThumbnail from "../../components/BlogPost/BlogThumbnail";
import Newsletter from "../Newsletter/Newsletter";
import { useAuth } from "../../contexts/authcontext/AuthContextProvider";

export default function Home() {
  const { currentUser } = useAuth();

  return (
    <div className={styles.home}>
      <div className={styles.hero}>
        <div className={styles.hero_text}>
          <h1>Hey, Welcome to the Best Tech Blogsite Ever!</h1>
          <p>
            Here you can read blogs from other users, write your own blog, share
            your blog with others, and comment on other blogs. Just login and
            start writing.
          </p>
          <button>
            <Link
              className={styles.button}
              to={currentUser ? "/write" : "/login"}
            >
              Write a Blog Now
            </Link>
          </button>
        </div>
        <div className={styles.hero_image}>
          <img
            src="https://images.unsplash.com/photo-1583932692977-7c74a6b7e7ac?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="hero"
          />
        </div>
      </div>
      <div className={styles.latest_blogs}>
        <h2>Enjoy Our Latest Blogs</h2>
        <div className={styles.blogposts}>
          <BlogThumbnail />
          <BlogThumbnail />
          <BlogThumbnail />
        </div>
        <Link to="/blogs" className={styles.button}>
          View All
        </Link>
      </div>
      <div className="subscribe_news">
        <h2>Subscribe to Our Newsletter</h2>
        <p>
          Subscribe to our newsletter to get the latest updates on our blogs.
        </p>
        <Newsletter />
      </div>
    </div>
  );
}
