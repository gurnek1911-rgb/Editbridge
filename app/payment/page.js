"use client";

import { useState } from "react";
import { db } from "../../lib/firebase";
import { addDoc, collection } from "firebase/firestore";

export default function Payment() {
  const [txn, setTxn] = useState("");

  const submit = async () => {
    await addDoc(collection(db, "payments"), {
      txnId: txn,
      status: "pending",
    });

    alert("Submitted");
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>Payment</h1>

      <input onChange={(e) => setTxn(e.target.value)} />
      <button onClick={submit}>Submit</button>
    </div>
  );
}