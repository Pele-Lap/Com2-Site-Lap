// hooks/useAuthRedirect.ts
"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation"; 
import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "../../../lib/firebase";
import { doc, getDoc } from "firebase/firestore";

export default function useAuthRedirect() {
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (!user) {
        router.push("/login");
      } else {
        const userDoc = await getDoc(doc(db, "users", user.email!));
        const role = userDoc.data()?.role;
        if (role === "admin") {
          if (window.location.pathname !== "/adm1n") {
            router.push("/adm1n");
          }
        } else {
          if (window.location.pathname !== "/home") {
            router.push("/home");
          }
        }
      }
    });

    return () => unsubscribe();
  }, [router]);
}
