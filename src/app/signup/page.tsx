"use client";
import { useState } from "react";
import { auth, db } from "../../../lib/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { setDoc, doc, getDoc } from "firebase/firestore";
import { useRouter } from "next/navigation";
import { serverTimestamp } from "firebase/firestore";

type UserInfo = {
  name: string;
  surname: string;
  phone: string;
  studentNumber: string;
  no: string;
  email: string;
  password: string;
  url: string;
};

export default function SignupPage() {
  const router = useRouter();

  // ✅ Strongly typed form state
  const [form, setForm] = useState<Omit<UserInfo, "url">>({
    name: "",
    surname: "",
    phone: "",
    studentNumber: "",
    no: "",
    email: "",
    password: "",
  });

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();

    if (form.password.length < 6) {
      alert("Password must be at least 6 characters long.");
      return;
    } else {
      try {
        // ✅ First create account
        await createUserWithEmailAndPassword(auth, form.email, form.password);

        // ✅ Check if user doc already exists
        const userDoc = await getDoc(doc(db, "users", form.email));
        if (userDoc.exists()) {
          alert("This account already exists");
          return;
        }

        // ✅ Save with email as doc id
        await setDoc(doc(db, "users", form.email), {
          ...form,
          role: "user",
          date: serverTimestamp(),
          url: "",
        });
        router.push("/login");
      } catch (error) {
        if (error instanceof Error) {
          alert(error.message);
        } else {
          console.error(error);
        }
      }
    }
  };

  // ✅ Ensure TypeScript knows which keys we loop through
  const fields: (keyof typeof form)[] = [
    "name",
    "surname",
    "phone",
    "studentNumber",
    "no",
    "email",
    "password",
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-200 text-black">
      <form
        onSubmit={handleSignup}
        className="bg-white p-6 rounded-md shadow-md w-full max-w-md"
      >
        <h1 className="text-xl font-bold mb-4">Sign Up</h1>
        {fields.map((field) => (
          <input
            key={field}
            type={field === "password" ? "password" : "text"}
            placeholder={field}
            value={form[field]}
            onChange={(e) => setForm({ ...form, [field]: e.target.value })}
            className="border p-2 w-full mb-2"
            required
          />
        ))}
        <button className="bg-blue-500 text-white px-4 py-2 rounded w-full">
          Sign Up
        </button>
      </form>
    </div>
  );
}
