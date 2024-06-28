import React, { useRef } from "react";
import styles from "./write.module.css";
import { addBlogCover, addBlogPost } from "../../firebase/upload_blogpost";

function Write() {
  const titleRef = useRef();
  const storyRef = useRef();
  const coverImageRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const title = titleRef.current.value;
    const story = storyRef.current.value;
    const cover_image = coverImageRef.current.files[0];
    console.log(title);
    const formData = {};
    formData.title = title;
    formData.story = story;
    const docId = await addBlogPost(formData);
    addBlogCover(cover_image, docId);
  };

  return (
    <div className={styles.write_blog}>
      <form className={styles.write_form} onSubmit={(e) => handleSubmit(e)}>
        <div className={styles.write_form_group}>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            placeholder="Title"
            className={styles.write_input}
            autoFocus={true}
            required
            ref={titleRef}
          />
        </div>
        <div className={styles.write_form_group}>
          <label htmlFor="cover_image">Cover Image</label>
          <input
            type="file"
            id="cover_image"
            placeholder="Select a cover image..."
            accept="image/*"
            className={styles.write_input}
            ref={coverImageRef}
          />
        </div>
        <div className={styles.write_form_group}>
          <label htmlFor="story">Story</label>
          <textarea
            placeholder="Tell your story..."
            type="text"
            className={styles.textarea}
            cols={150}
            rows={200}
            required
            ref={storyRef}
          ></textarea>
        </div>
        <button type="submit" className={styles.write_submit}>
          Publish
        </button>
      </form>
    </div>
  );
}

export default Write;
