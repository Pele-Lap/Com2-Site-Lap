"use client"
import Navbar from "../components/Navbar";
import useAuthRedirect from "../hooks/useAuthRedirect";

export default function Homepage(){
    useAuthRedirect();
    return(
        <>
        <Navbar></Navbar>
        <div className="p-4">
            <div className="flex flex-col items-center bg-white rounded-xl shadow-lg w-full mx-auto mt-5 border border-blue-200">
                <div className="flex flex-col items-center justify-center text-blue-700 w-full p-5 rounded-t-2xl">
                  <h1 className="text-2xl font-bold">Documents Page Here</h1>
                </div>
            </div>
            {/* Year 4 Section */}
            <div className="flex flex-col items-center justify-center bg-blue-600 w-full p-5 rounded-t-2xl mt-5">
              <h1 className="text-white text-xl font-bold">YEAR 4 Ebooks</h1>
            </div>
            <div className="p-4 bg-blue-50 w-full grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 rounded-b-xl border border-blue-300">
              <div className="flex flex-col items-center justify-center bg-white shadow-md border border-blue-200 p-4 rounded-xl">
                <p className="text-blue-700 font-medium">Ebook Placeholder</p>
              </div>
            </div>
            
            {/* Year 3 Section */}
            <div className="flex flex-col items-center justify-center bg-blue-600 w-full p-5 rounded-t-2xl mt-5">
              <h1 className="text-white text-xl font-bold">YEAR 3 Ebooks</h1>
            </div>
            <div className="p-4 bg-blue-50 w-full grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 rounded-b-xl border border-blue-300">
              <div className="flex flex-col items-center justify-center bg-white shadow-md border border-blue-200 p-4 rounded-xl">
                <p className="text-blue-700 font-medium">Ebook Placeholder</p>
              </div>
            </div>
        </div>
        </>
    );
}