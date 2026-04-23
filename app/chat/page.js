"use client";
import { app } from "@/firebase";
import { useState, useEffect } from "react";
import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";
import { app } from "../../firebase";

export default function Chat() {
  const [msg, setMsg] = useState("");
  const [messages, setMessages] = useState([]);

  const db = getFirestore(app);

  const sendMessage = async () => {
    if (!msg) return;

    await addDoc(collection(db, "messages"), {
      text: msg,
      time: Date.now()
    });

    setMsg("");
    loadMessages();
  };

  const loadMessages = async () => {
    const snapshot = await getDocs(collection(db, "messages"));
    setMessages(snapshot.docs.map(doc => doc.data()));
  };

  useEffect(() => {
    loadMessages();
  }, []);

  return (
    <div style={{
      background: "#0f0f0f",
      color: "white",
      minHeight: "100vh",
      padding: "20px"
    }}>
      
      <h2>Chat</h2>

      <div>
        {messages.map((m, i) => (
          <p key={i}>{m.text}</p>
        ))}
      </div>

      <input
        value={msg}
        onChange={(e) => setMsg(e.target.value)}
        placeholder="Type message..."
      />

      <button onClick={sendMessage}>Send</button>

    </div>
  );
}