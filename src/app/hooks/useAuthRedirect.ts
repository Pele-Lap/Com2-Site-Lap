// hooks/useAuthRedirect.ts
"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation"; 
import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "../../../lib/firebase";
import { getDoc, doc } from "firebase/firestore";

export default function useAuthRedirect() {
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (!user) {
        router.push("/login");
      }
    });

    return () => unsubscribe();
  }, [router]);
}

export function CheckAdmin(){
    const router = useRouter();

    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        const userDoc = await getDoc(doc(db, "users", user.email!));
        const role = userDoc.data()?.role;
        if (role === "user") {
            router.push("/home");
          }
      }
    });

    return () => unsubscribe();
  }, [router]);
}
