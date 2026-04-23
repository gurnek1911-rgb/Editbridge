"use client";

import { useState, useEffect } from "react";
import { db } from "../../lib/firebase";
import { collection, addDoc, onSnapshot, serverTimestamp } from "firebase/firestore";

export default function Chat() {
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState("");

  useEffect(() => {
    const unsub = onSnapshot(collection(db, "messages"), (snapshot) => {
      setMessages(snapshot.docs.map(doc => doc.data()));
    });
    return () => unsub();
  }, []);

  const sendMessage = async () => {
    if (!text) return;

    await addDoc(collection(db, "messages"), {
      text,
      createdAt: serverTimestamp(),
    });

    setText("");
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>Chat</h1>

      {messages.map((m, i) => (
        <p key={i}>{m.text}</p>
      ))}

      <input value={text} onChange={(e) => setText(e.target.value)} />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
}