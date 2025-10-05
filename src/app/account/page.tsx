"use client";
import { useEffect, useState } from "react";
import { db, auth } from "../../../lib/firebase";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import Navbar from "../components/Navbar";
import LogoutButton from "@/app/hooks/signout";
import { User } from "firebase/auth";
import useAuthRedirect from "../hooks/useAuthRedirect";

type UserInfo = {
  name: string;
  surname: string;
  phone: string;
  studentNumber: string;
  no: string;
  url: string;
  email: string;
};

export default function AccountPage() {
    useAuthRedirect();
  const [userInfo, setUserInfo] = useState<UserInfo | null>(null);
  const [updatePhone, setUpdatePhone] = useState("");
  const [updateName, setUpdateName] = useState("");
  const [updateSurname, setUpdateSurname] = useState("");
  const [updateStudentNumber, setUpdateStudentNumber] = useState("");
  const [updateNo, setUpdateNo] = useState("");
  const [updateUrl, setUpdateUrl] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(true); // To handle loading state

  // ⬇️ Allow null, since Firebase can return null
  const loadUser = async (user: User | null) => {
    if (!user || !user.email) {
        setUserInfo(null);   // clear user info
        setLoading(false);
        return; // don't log error, just exit quietly
      }

    const docRef = doc(db, "users", user.email);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      setUserInfo(docSnap.data() as UserInfo | null);
      setUpdateName(docSnap.data()?.name || "");
      setUpdateSurname(docSnap.data()?.surname || "");
      setUpdatePhone(docSnap.data()?.phone || "");
      setUpdateStudentNumber(docSnap.data()?.studentNumber || "");
      setUpdateNo(docSnap.data()?.no || "");
      setUpdateUrl(docSnap.data()?.url || "");
    } else {
      console.log("No such document!");
    }
    setLoading(false);
  };

  useEffect(() => {
  const unsubscribe = auth.onAuthStateChanged((user) => {
    loadUser(user); // user is User | null
  });

  return () => unsubscribe();
}, []);


  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (!userInfo) {
    return <h1>No user data found</h1>;
  }

  const handleUpdate = async () => {
    if (!updateName || !updateSurname || !updatePhone || !updateStudentNumber || !updateNo) {
      alert("Please fill all of the boxes below");
      return;
    }
    try {
      const userId = userInfo.email;
      const userDoc = doc(db, "users", userId);
      await updateDoc(userDoc, {
        name: updateName,
        surname: updateSurname,
        phone: updatePhone,
        studentNumber: updateStudentNumber,
        no: updateNo,
        url: updateUrl,
      });
      alert("✅ Success Updated");
      setUpdateName("");
      setUpdateSurname("");
      setUpdatePhone("");
      setUpdateStudentNumber("");
      setUpdateNo("");
      setUpdateUrl("");
      setIsModalOpen(false);
    if (auth.currentUser) {
      loadUser(auth.currentUser);
       } // Reload user data after update
    } catch (error) {
      alert("Error: Please check your internet");
      console.error(error);
    }
  };

  return (
    <>
      <Navbar />
      <div className="p-4 flex flex-col items-center space-y-4 bg-blue-50 rounded-xl shadow-lg w-full max-w-md mx-auto mt-6">
        <h2 className="text-2xl font-bold text-blue-600">👤 Account Info</h2>
        {userInfo.url ? (
          <img
            src={userInfo.url}
            alt={userInfo.name}
            width={160}
            height={160}
            className="object-cover w-[160px] h-[160px] rounded-full shadow-md border-4 border-white"
            onError={() => alert(`❌ Failed to load image for ${userInfo.name}`)}
          />
        ) : (
          <div className="w-[160px] h-[160px] rounded-full bg-gray-200 flex items-center justify-center text-gray-500 shadow-md">
            No Image
          </div>
        )}
        <div className="text-center space-y-1">
          <p className="text-blue-800 font-semibold">Name: <span className="text-gray-800">{userInfo.name}</span></p>
          <p className="text-blue-800 font-semibold">Surname: <span className="text-gray-800">{userInfo.surname}</span></p>
          <p className="text-blue-800 font-semibold">Phone: <span className="text-gray-800">{userInfo.phone}</span></p>
          <p className="text-blue-800 font-semibold">Student Number: <span className="text-gray-800">{userInfo.studentNumber}</span></p>
          <p className="text-blue-800 font-semibold">No: <span className="text-gray-800">{userInfo.no}</span></p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 w-full justify-center mt-4">
          <LogoutButton />
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded shadow-md transition w-full sm:w-auto"
          >
            🔄 Update User Info
          </button>
        </div>

        {/* ✅ Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 bg-gray-300 bg-opacity-50 flex items-center justify-center z-50 px-4 backdrop-blur-3xl">
            <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-6 animate-fade-in">
              <h2 className="text-2xl font-bold text-blue-600 mb-4 text-center">
                ✏️ Update Your Info
              </h2>
              <div className="space-y-3">
                <input
                  type="text"
                  placeholder="New Name"
                  className="border border-blue-300 rounded-lg px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
                  value={updateName}
                  onChange={(e) => setUpdateName(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="New Surname"
                  className="border border-blue-300 rounded-lg px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
                  value={updateSurname}
                  onChange={(e) => setUpdateSurname(e.target.value)}
                />
                <input
                  type="tel"
                  placeholder="New Phone"
                  className="border border-blue-300 rounded-lg px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
                  value={updatePhone}
                  onChange={(e) => setUpdatePhone(e.target.value)}
                />
                <input
                  type="tel"
                  placeholder="New Student Number"
                  className="border border-blue-300 rounded-lg px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
                  value={updateStudentNumber}
                  onChange={(e) => setUpdateStudentNumber(e.target.value)}
                />
                <input
                  type="tel"
                  placeholder="New No"
                  className="border border-blue-300 rounded-lg px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
                  value={updateNo}
                  onChange={(e) => setUpdateNo(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Image URL"
                  className="border border-blue-300 rounded-lg px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
                  value={updateUrl}
                  onChange={(e) => setUpdateUrl(e.target.value)}
                />
              </div>
              <div className="mt-6 flex justify-between">
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 rounded-lg bg-white border border-gray-300 text-gray-700 hover:bg-gray-100 transition"
                >
                  ❌ Cancel
                </button>
                <button
                  onClick={handleUpdate}
                  className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition"
                >
                  ✅ Yes, Update
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
