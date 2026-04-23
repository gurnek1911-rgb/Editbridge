"use client";
import { app } from "@/firebase";
import { useState } from "react";
import { getFirestore, addDoc, collection } from "firebase/firestore";
import { app } from "../../firebase";

export default function Editor() {
  const [name, setName] = useState("");
  const [link, setLink] = useState("");
  const [image, setImage] = useState("");

  const handleUpload = async () => {
    const db = getFirestore(app);

    await addDoc(collection(db, "editors"), {
      name,
      portfolio: link,
      image
    });

    alert("Uploaded ✅");
  };

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h2>Editor Panel</h2>

      <input placeholder="Name" onChange={(e) => setName(e.target.value)} />
      <br />

      <input placeholder="Google Drive Link" onChange={(e) => setLink(e.target.value)} />
      <br />

      <input placeholder="Image URL" onChange={(e) => setImage(e.target.value)} />
      <br />

      <button onClick={handleUpload}>Upload</button>
    </div>
  );
}