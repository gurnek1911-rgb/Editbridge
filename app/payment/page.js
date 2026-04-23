"use client";

import { useState } from "react";
import { app } from "@/firebase";
import { getFirestore, addDoc, collection } from "firebase/firestore";

export default function Payment() {
  const [txn, setTxn] = useState("");

  const submit = async () => {
    const db = getFirestore(app); // ✅ create db here

    await addDoc(collection(db, "payments"), {
      txnId: txn,
      status: "pending",
    });

    alert("Submitted ✅");
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>Payment</h1>

      <input
        placeholder="Enter Transaction ID"
        onChange={(e) => setTxn(e.target.value)}
      />

      <button onClick={submit}>Submit</button>
    </div>
  );
}