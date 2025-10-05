"use client";
import NavAdmin from "../../components/NavAdmin";
import useAuthRedirect, { CheckAdmin } from "../../hooks/useAuthRedirect";

export default function AdminPage() {
  CheckAdmin();
  useAuthRedirect();


  return (
    <>
      <NavAdmin />
      <div className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-blue-200 flex items-center justify-center p-6">
        <div className="bg-white rounded-2xl shadow-2xl p-10 max-w-xl w-full text-center">
          <h1 className="text-4xl font-extrabold text-blue-600 mb-4">
            👋 Welcome, Admin!
          </h1>
          <p className="text-gray-600 text-lg mb-6">
            You have successfully accessed the <span className="font-semibold">Admin Dashboard</span>.
          </p>

          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 shadow-inner">
            <p className="text-blue-700 font-medium">
              Manage users, documents, and settings all in one place.  
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
