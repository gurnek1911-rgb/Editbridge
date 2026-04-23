"use client";
import { app } from "@/firebase";
import { useEffect, useState } from "react";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { app } from "../../firebase";

export default function Editors() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const db = getFirestore(app);
      const snapshot = await getDocs(collection(db, "editors"));

      setData(snapshot.docs.map(doc => doc.data()));
    };

    fetchData();
  }, []);

  return (
    <div style={{
      background: "#0f0f0f",
      minHeight: "100vh",
      padding: "30px",
      color: "white"
    }}>
      
      <h1 style={{ marginBottom: "30px" }}>Top Editors</h1>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
        gap: "20px"
      }}>
        
        {data.map((item, i) => (
          <div key={i} style={{
            background: "#1a1a1a",
            borderRadius: "12px",
            overflow: "hidden",
            border: "1px solid #333"
          }}>
            
            <img 
              src={item.image || "https://via.placeholder.com/300x200"} 
              style={{ width: "100%", height: "180px", objectFit: "cover" }}
            />

            <div style={{ padding: "15px" }}>
              <h3>{item.name}</h3>

              <p style={{ color: "#facc15" }}>⭐ 4.8</p>

              <a href={item.portfolio} target="_blank">
                <button style={{
                  marginTop: "10px",
                  padding: "10px",
                  width: "100%",
                  borderRadius: "6px",
                  border: "none",
                  background: "linear-gradient(90deg, #7c3aed, #06b6d4)",
                  color: "white"
                }}>
                  View Portfolio
                </button>
              </a>
            </div>

          </div>
        ))}

      </div>
    </div>
  );
}