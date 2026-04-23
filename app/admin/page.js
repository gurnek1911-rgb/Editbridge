"use client";

import { useState, useEffect } from "react";
import { db } from "../../lib/firebase";
import { collection, onSnapshot, updateDoc, doc } from "firebase/firestore";

export default function Admin() {
  const [pass, setPass] = useState("");
  const [access, setAccess] = useState(false);
  const [payments, setPayments] = useState([]);

  const check = () => {
    if (pass === "Gurnek191108") {
      setAccess(true);
    } else {
      alert("Wrong password");
    }
  };

  useEffect(() => {
    if (!access) return;

    const unsub = onSnapshot(collection(db, "payments"), (snap) => {
      setPayments(snap.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    });

    return () => unsub();
  }, [access]);

  const approve = async (id) => {
    await updateDoc(doc(db, "payments", id), {
      status: "approved",
    });
  };

  if (!access) {
    return (
      <div style={{ padding: 20 }}>
        <h1>Admin Access</h1>
        <input onChange={(e) => setPass(e.target.value)} />
        <button onClick={check}>Enter</button>
      </div>
    );
  }

  return (
    <div style={{ padding: 20 }}>
      <h1>Admin Dashboard</h1>

      {payments.map((p) => (
        <div key={p.id}>
          <p>{p.txnId} - {p.status}</p>
          <button onClick={() => approve(p.id)}>Approve</button>
        </div>
      ))}
    </div>
  );
}