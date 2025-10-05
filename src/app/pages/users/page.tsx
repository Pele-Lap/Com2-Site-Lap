"use client";
import { useState, useEffect } from "react";
import { firebaseGetUsers, firebaseHandleDelete} from "@/app/data/getData";
import useAuthRedirect, { CheckAdmin } from "@/app/hooks/useAuthRedirect";
import NavAdmin from "@/app/components/NavAdmin";

type User = {
    id: string;
    name: string;
    surname: string;
    phone: string;
    email:string;
    no:string;
    url: string;
};


export default function FirebasePage(){

    CheckAdmin();
    useAuthRedirect();


    const [users, setUsers] = useState<User[]>([]);
    const [confirmDeleteId, setConfirmDeleteId] = useState<string | null>(null);



    const fetchUsers = async() => {
        const data = await firebaseGetUsers() as User[];
        setUsers(data);

    };

    const handleDeleteConfirm = async () => {
      if (confirmDeleteId) {
        await firebaseHandleDelete({ deleteId: confirmDeleteId });
        fetchUsers();
        setConfirmDeleteId(null);
      }
    };


    useEffect(() => {
    fetchUsers(); 
    }, []);

    

    return(
    <>
    <NavAdmin></NavAdmin>
        <main className="p-6 space-y-6 max-w-xl mx-auto">
            <h1 className="text-2xl font-bold">All User already Login</h1>

            <div>
                <h2 className="font-semibold mt-6">📋 Current Users:</h2>
                <div className=" flex flex-col gap-5 pl-5">
            {users.map(user => (
              <div key={user.id} className="flex flex-row border justify-between p-6 gap-3 rounded-lg shadow-md">
                {user.url ? (
                  <img
                    src={user.url}
                    alt={user.name}
                    width={100}
                    height={100}
                    className="object-cover rounded-md"
                    onError={() => alert(`❌ Failed to load image for ${user.name}`)}
                  />
                ) : (
                  <div className="w-[100px] h-[100px] flex items-center justify-center bg-gray-200 text-gray-500 rounded-md">
                    No Image
                  </div>
                )}
            
                <div className="flex flex-col gap-2 self-center flex-1">
                  <p className="font-semibold">{user.name} {user.surname}</p>
                  <p>📞 {user.phone}</p>
                  <p>🆔 No: {user.no}</p>
                  <p className="text-xs text-blue-700">{user.email}</p>
                </div>
            
                <button
                  onClick={() => setConfirmDeleteId(user.id)}
                  className="bg-red-500 hover:bg-red-600 text-white px-3 py-2 rounded-md transition"
                >
                  🗑️ Delete
                </button>

              </div>
            ))}


            </div>

            </div>

            </main>

            {confirmDeleteId && (
              <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                <div className="bg-white rounded-xl shadow-lg p-6 max-w-sm w-full text-center">
                  <h2 className="text-lg font-semibold mb-4 text-red-600">⚠️ Confirm Delete</h2>
                  <p className="mb-6">Are you sure you want to delete this user?</p>
                  <div className="flex justify-between gap-4">
                    <button
                      onClick={() => setConfirmDeleteId(null)}
                      className="px-4 py-2 rounded-lg bg-gray-200 hover:bg-gray-300 text-gray-700 w-full"
                    >
                      ❌ Cancel
                    </button>
                    <button
                      onClick={handleDeleteConfirm}
                      className="px-4 py-2 rounded-lg bg-red-500 hover:bg-red-600 text-white w-full"
                    >
                      ✅ Confirm
                    </button>
                  </div>
                </div>
              </div>
            )}

        </>

    );

}
