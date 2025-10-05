"use client"
import NavAdmin from "@/app/components/NavAdmin";
import useAuthRedirect from "@/app/hooks/useAuthRedirect";
import { CheckAdmin } from "@/app/hooks/useAuthRedirect";

export default function Homepage(){
    CheckAdmin();
    useAuthRedirect();
    return(
        <>
        <NavAdmin></NavAdmin>
            <div className="p-4">
                {/* Title Section */}
                <div className="flex flex-col items-center bg-white rounded-xl shadow-lg w-full mx-auto mt-5 border border-blue-200">
                  <div className="flex flex-col items-center justify-center text-blue-700 w-full p-5 rounded-t-2xl">
                    <h1 className="text-2xl font-bold">Homework Page Here</h1>
                  </div>
                </div>

                {/* Year 4 Section */}
                <div className="flex flex-col items-center bg-white rounded-xl shadow-lg w-full mx-auto mt-5 border border-blue-200">
                  <div className="flex flex-col items-center justify-center bg-blue-600 w-full p-5 rounded-t-2xl">
                    <h1 className="text-white text-xl font-bold">YEAR 4</h1>
                  </div>
                  <div className="p-4 bg-blue-50 w-full flex flex-col gap-4 rounded-b-xl">
                    <div className="flex flex-row justify-between bg-white p-4 rounded-2xl items-center shadow-md border border-blue-200">
                      <div className="flex flex-col text-blue-800">
                        <h1 className="text-lg font-semibold">Linux Basic 6 Homework</h1>
                        <h1 className="text-red-500 font-medium">Deadline : 24 / 10 / 2005</h1>
                      </div>
                      <div className="flex flex-row gap-4">
                        <button className="text-red-500 hover:text-red-700 font-medium">Delete</button>
                        <button className="text-blue-600 hover:text-blue-800 font-medium">View more</button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Year 3 Section */}
                <div className="flex flex-col items-center bg-white rounded-xl shadow-lg w-full mx-auto mt-5 border border-blue-200">
                  <div className="flex flex-col items-center justify-center bg-blue-600 w-full p-5 rounded-t-2xl">
                    <h1 className="text-white text-xl font-bold">YEAR 3</h1>
                  </div>
                  <div className="p-4 bg-blue-50 w-full flex flex-col gap-4 rounded-b-xl">
                    <div className="flex flex-row justify-between bg-white p-4 rounded-2xl items-center shadow-md border border-blue-200">
                      <div className="flex flex-col text-blue-800">
                        <h1 className="text-lg font-semibold">Title Complex</h1>
                        <h1 className="text-red-500 font-medium">Deadline : 24 / 10 / 2005</h1>
                      </div>
                      <div className="flex flex-row gap-4">
                        <button className="text-red-500 hover:text-red-700 font-medium">Delete</button>
                        <button className="text-blue-600 hover:text-blue-800 font-medium">View more</button>
                      </div>
                    </div>
                  </div>
                </div>
            </div>

        </>
    );
}