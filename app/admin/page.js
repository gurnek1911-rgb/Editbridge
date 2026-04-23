"use client";
import { app } from "@/firebase";
import { useState, useEffect } from "react";
import { getFirestore, collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import { app } from "../../firebase";

export default function Admin() {
  const [password, setPassword] = useState("");
  const [access, setAccess] = useState(false);
  const [data, setData] = useState([]);

  const correctPassword = "Gurnek191108"; // your password

  const handleLogin = () => {
    if (password === correctPassword) {
      setAccess(true);
      fetchData();
    } else {
      alert("Wrong Password ❌");
    }
  };

  const fetchData = async () => {
    const db = getFirestore(app);
    const snapshot = await getDocs(collection(db, "editors"));

    setData(snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    })));
  };

  const handleDelete = async (id) => {
    const db = getFirestore(app);
    await deleteDoc(doc(db, "editors", id));
    fetchData();
  };

  // 🔒 If not logged in
  if (!access) {
    return (
      <div style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        background: "#0f0f0f",
        color: "white"
      }}>
        <h2>Admin Login</h2>

        <input
          type="password"
          placeholder="Enter Password"
          onChange={(e) => setPassword(e.target.value)}
          style={{ padding: "10px", margin: "10px" }}
        />

        <button onClick={handleLogin}>
          Enter
        </button>
      </div>
    );
  }

  // ✅ Admin Panel
  return (
    <div style={{ padding: "30px", background: "#0f0f0f", color: "white" }}>
      <h1>Admin Panel</h1>

      {data.map((item) => (
        <div key={item.id} style={{
          margin: "10px 0",
          padding: "10px",
          border: "1px solid #333"
        }}>
          <h3>{item.name}</h3>
          <button onClick={() => handleDelete(item.id)}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}