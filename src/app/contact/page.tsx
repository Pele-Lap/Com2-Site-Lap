"use client"
import Navbar from "../components/Navbar";
import useAuthRedirect from "@/app/hooks/useAuthRedirect";
import Link from "next/link";
import { useState } from "react";
import { useEffect } from "react";
import { getPresidentInfo} from "@/app/data/getData";
import { getYear4Teacher, getYear3Teacher } from "@/app/data/getData";
type Info = {
  id:string,
  url:string,
  name:string,
  surname:string,
  phone:string,
};


export default function ContactPage(){
    useAuthRedirect();

    const [presidentData, setPresidentData] = useState<Info[]>([]);
    const [teacheryear4, setTeacheryear4] = useState<Info[]>([]);
    const [teacheryear3, setTeacheryear3] = useState<Info[]>([]);

    //Fetch President info
    const fetchPresidentInfo = async() => {
      const data = await getPresidentInfo() as Info[];
      setPresidentData(data);
    }

    const fetchYear4Teacher = async() => {
      const data = await getYear4Teacher() as Info[];
      setTeacheryear4(data);
    }

    const fetchYear3Teacher = async() => {
      const data = await getYear3Teacher() as Info[];
      setTeacheryear3(data);
    }

    useEffect(() => {
    fetchPresidentInfo();
    fetchYear4Teacher();
    fetchYear3Teacher();
    }, []);

    return(
        <>
        <Navbar></Navbar>
            <div className="p-4">
              {/* President Section */}
              <div className="p-4 flex flex-col items-center space-y-4 bg-blue-50 rounded-xl shadow-lg w-full mx-auto mt-2">
                {/* Top President */}
                {presidentData[0] && (
                  <div className="w-full sm:w-fit">
                    <div className="bg-white border border-blue-200 rounded-xl shadow-md p-4 flex flex-col items-center">
                      {presidentData[0]?.url ? (
                        <img
                            src={presidentData[0].url}
                            alt="President photo"
                            className="w-[50px] h-[50px] rounded-full bg-blue-300"
                          />
                        ) : (
                          <div className="w-[50px] h-[50px] rounded-full bg-blue-300 content-center items-center">
                            <h1 className="self-center text-[13px]">No IMG</h1>
                          </div>
                        )}
                      <h1 className="text-blue-700 font-semibold mt-2">President 1</h1>
                      <div className="flex flex-col text-[20px] sm:flex-row gap-1 items-center justify-center text-blue-800">
                        <h1>{presidentData[0].name}</h1>
                        <h1>{presidentData[0].surname}</h1>
                      </div>
                      <div className="flex flex-row items-center justify-center gap-2 text-blue-600">
                        <h1>{presidentData[0].phone}</h1>
                        <Link href={`https://wa.me/856${presidentData[0].phone}`} target="_blank" className="text-blue-500 hover:text-blue-700">Chat</Link>
                      </div>
                    </div>
                  </div>
                )}
                
                {/* Other Presidents */}
                <div className="flex flex-col sm:flex-row gap-5 justify-around w-full mt-4">
                  {presidentData[1] && (
                    <div>
                      <div className="bg-white border border-blue-200 rounded-xl shadow-md p-4 flex flex-col items-center">
                        {presidentData[1]?.url ? (
                        <img
                            src={presidentData[1].url}
                            alt="President photo"
                            className="w-[50px] h-[50px] rounded-full bg-blue-300"
                          />
                        ) : (
                          <div className="w-[50px] h-[50px] rounded-full bg-blue-300 content-center items-center">
                            <h1 className="self-center text-[13px]">No IMG</h1>
                          </div>
                        )}
                        <h1 className="text-blue-700 font-semibold mt-2">President 2</h1>
                        <div className="flex flex-col text-[20px] sm:flex-row gap-1 justify-center items-center text-blue-800">
                          <h1>{presidentData[1].name}</h1>
                          <h1>{presidentData[1].surname}</h1>
                        </div>
                        <div className="flex flex-row items-center justify-center gap-2 text-blue-600">
                          <h1>{presidentData[1].phone}</h1>
                          <Link href={`https://wa.me/856${presidentData[1].phone}`} target="_blank" className="text-blue-500 hover:text-blue-700">Chat</Link>
                        </div>
                      </div>
                    </div>
                  )}

                  {presidentData[2] && (
                    <div>
                      <div className="bg-white border border-blue-200 rounded-xl shadow-md p-4 flex flex-col items-center">
                        {presidentData[2]?.url ? (
                        <img
                            src={presidentData[2].url}
                            alt="President photo"
                            className="w-[50px] h-[50px] rounded-full bg-blue-300"
                          />
                        ) : (
                          <div className="w-[50px] h-[50px] rounded-full bg-blue-300 content-center items-center">
                            <h1 className="self-center text-[13px]">No IMG</h1>
                          </div>
                        )}
                        <h1 className="text-blue-700 font-semibold mt-2">President 3</h1>
                        <div className="flex flex-col text-[20px] sm:flex-row gap-1 justify-center items-center text-blue-800">
                          <h1>{presidentData[2].name}</h1>
                          <h1>{presidentData[2].surname}</h1>
                        </div>
                        <div className="flex flex-row items-center justify-center gap-2 text-blue-600">
                          <h1>{presidentData[2].phone}</h1>
                          <Link href={`https://wa.me/856${presidentData[2].phone}`} target="_blank" className="text-blue-500 hover:text-blue-700">Chat</Link>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
                
              {/* Year 4 Section */}
              <div className="flex flex-col items-center bg-white rounded-xl shadow-lg w-full mx-auto mt-5 border border-blue-200">
                <div className="flex flex-col items-center justify-center bg-blue-600 w-full p-5 rounded-t-2xl">
                  <div className="flex flex-row gap-5 content-center items-center">
                    <h1 className="text-white text-xl font-bold">YEAR 4</h1>
                  </div>
                </div>
                {teacheryear4.map(teacher=>(
                  <div key={teacher.id} className="p-4 bg-blue-50 w-full flex flex-col gap-4 rounded-b-xl">
                    <div className="flex flex-row justify-between bg-white border border-blue-200 p-4 rounded-2xl items-center shadow-sm">
                    <div className="flex flex-row gap-2">
                      {teacher?.url ? (
                        <img
                            src={teacher.url}
                            alt="President photo"
                            className="w-[50px] h-[50px] rounded-full bg-blue-300"
                          />
                        ) : (
                          <div className="w-[50px] h-[50px] rounded-full bg-blue-300 content-center items-center">
                            <h1 className="self-center text-[13px]">No IMG</h1>
                          </div>
                        )}
                      <div className="flex flex-col text-blue-800">
                        <div className="flex flex-col sm:flex-row sm:gap-2">
                          <h1>{teacher.name}</h1>
                          <h1>{teacher.surname}</h1>
                        </div>
                        <div className="flex flex-row gap-2">
                            <h1 className="text-red-500">{teacher.phone}</h1>
                            <Link href={`https://wa.me/856${teacher.phone}`} target="_blank" className="text-blue-500 hover:text-blue-700">Chat</Link>
                        </div>
                      </div>
                    </div>
                    </div>
                  </div>
                ))}
              </div>
                
              {/* Year 3 Section */}
              <div className="flex flex-col items-center bg-white rounded-xl shadow-lg w-full mx-auto mt-5 border border-blue-200">
                <div className="flex flex-col items-center justify-center bg-blue-600 w-full p-5 rounded-t-2xl">
                  <div className="flex flex-row gap-5 content-center items-center">
                    <h1 className="text-white text-xl font-bold">YEAR 3</h1>
                  </div>
                </div>
                <div className="p-4 bg-blue-50 w-full flex flex-col gap-4 rounded-b-xl">
                  {teacheryear3.map(teacher=>(
                    <div key={teacher.id} className="flex flex-row justify-between bg-white border border-blue-200 p-4 rounded-2xl items-center shadow-sm">
                      <div className="flex flex-row gap-2">
                        {teacher?.url ? (
                        <img
                            src={teacher.url}
                            alt="President photo"
                            className="w-[50px] h-[50px] rounded-full bg-blue-300"
                          />
                        ) : (
                          <div className="w-[50px] h-[50px] rounded-full bg-blue-300 content-center items-center">
                            <h1 className="self-center text-[13px]">No IMG</h1>
                          </div>
                        )}
                        <div className="flex flex-col text-blue-800">
                          <div className="flex flex-col sm:flex-row sm:gap-2">
                            <h1>{teacher.name}</h1>
                            <h1>{teacher.surname}</h1>
                          </div>
                          <div className="flex flex-row gap-2">
                              <h1 className="text-red-500">{teacher.phone}</h1>
                              <Link href={`https://wa.me/856${teacher.phone}`} target="_blank" className="text-blue-500 hover:text-blue-700">Chat</Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}

                </div>
              </div>
            </div>
        </>
    );
}