"use client";

import { useState } from "react";
import { auth } from "../../lib/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert("Logged in");
    } catch (e) {
      alert(e.message);
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>Login</h1>

      <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} /><br/>
      <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} /><br/>

      <button onClick={login}>Login</button>
    </div>
  );
}