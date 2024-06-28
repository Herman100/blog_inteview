import { db } from "../firebase/firebase";
import { addDoc, doc, setDoc } from "firebase/firestore";
import { ref, uploadBytes } from "firebase/storage";
import { useAuth } from "../contexts/authcontext/AuthContextProvider";
import { storage } from "../firebase/firebase";
import { collection, getDocs, query, where } from "firebase/firestore";

export const addBlogPost = async (data) => {
  console.log(data);
  try {
    const docRef = await addDoc(collection(db, "blogs"), {
      ...data,
      time: new Date(),
    });
    console.log("Document written with ID: ", docRef.id);
    return docRef.id;
  } catch (error) {
    console.log("Error adding document: ", error);
  }
};

export const addBlogCover = async (image, docId) => {
  const storageRef = ref(storage, `blogs/${docId}/cover.jpg`);
  try {
    await uploadBytes(storageRef, image);
    console.log("Image uploaded successfully");
    await setDoc(
      doc(db, "blogs", docId),
      { image: `blogs/${docId}/cover.jpg` },
      { merge: true }
    );
    console.log("Image reference added to blog data");
  } catch (error) {
    console.error("Error uploading image: ", error);
  }
};
