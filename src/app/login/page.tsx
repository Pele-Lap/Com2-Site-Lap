"use client";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { auth, db } from "../../../lib/firebase";
import { doc, getDoc } from "firebase/firestore";
import { useRouter } from "next/navigation";
import useAuthRedirect from "../hooks/useAuthRedirect";


export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useAuthRedirect();

  const handleLogin = async (e: React.FormEvent) => {
  e.preventDefault();
  try {
    await signInWithEmailAndPassword(auth, email, password);

    // ✅ Get user doc by UID
    const userDoc = await getDoc(doc(db, "users", email));
    const role = userDoc.data()?.role;

    if (role === "admin") {
      router.push("/pages/adm1n");
    } else {
      router.push("/home");
    }
  } catch (error) {
    alert("Email or Password Incorrect try again");
    console.log(error);
  }
};

  return (
    <div className="min-h-screen flex gap-4 items-center justify-center bg-green-200 text-black">
      <form onSubmit={handleLogin} className="bg-white p-6 rounded-md shadow-md w-full max-w-md">
        <h1 className="text-xl font-bold mb-4">Login</h1>
        <input
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          className="border p-2 w-full mb-2"
          required
        />
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          className="border p-2 w-full mb-4"
          required
        />
        <button className="bg-green-500 text-white px-4 py-2 rounded w-full">Login</button>

        <div className=" mt-4 p-4 flex flex-row gap-4">
          <h1>If no have Login email Click here</h1> <button onClick={()=>{router.push("/signup")}} className=" text-blue-800">SignUP</button>
        </div>
      </form>
    </div>
  );
}
