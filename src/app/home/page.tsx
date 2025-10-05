"use client"
import Navbar from "../components/Navbar";
import useAuthRedirect from "@/app/hooks/useAuthRedirect";
import Slideshow from "@/app/components/Slideshow";

export default function Homepage(){
    useAuthRedirect();
    
    return(
        <>
        <Navbar></Navbar>
            <Slideshow></Slideshow>
                <div className="p-4">    
                    <div className="w-full max-w-3xl mx-auto relative">
                        {/* Title Section */}
                        <div className="flex flex-col items-center bg-white shadow-lg w-full mx-auto mt-2 border border-blue-200 rounded-t-2xl">
                          <div className="flex flex-col items-center justify-center text-blue-700 w-full p-5">
                            <h1 className="text-2xl font-bold">Welcome to com2 site</h1>
                          </div>
                        </div>
                        <div className="border border-blue-200 p-4 text-[14px]">
                            <h1>Hello</h1>
                        </div>
                    </div>
                </div>
        </>
    );
}