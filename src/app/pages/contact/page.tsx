"use client"
import NavAdmin from "@/app/components/NavAdmin";
import useAuthRedirect, { CheckAdmin } from "@/app/hooks/useAuthRedirect";
import Link from "next/link";
import { useState } from "react";
import { useEffect } from "react";
import { getPresidentInfo, updatePresidentInfo} from "@/app/data/getData";
import ADDyear4Teacher from "@/app/components/addyear4teacher";
import ADDyear3Teacher from "@/app/components/addyear3teacher";
import { getYear4Teacher, getYear3Teacher } from "@/app/data/getData";
import { DeleteYear4Teacher, DeleteYear3Teacher } from "@/app/data/getData";

type Info = {
  id:string,
  url:string,
  name:string,
  surname:string,
  phone:string,
};


export default function ContactPage(){
    CheckAdmin();
    useAuthRedirect();

    const [presidentData, setPresidentData] = useState<Info[]>([]);
    const [teacheryear4, setTeacheryear4] = useState<Info[]>([]);
    const [teacheryear3, setTeacheryear3] = useState<Info[]>([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [deleteYear4Teacher, setDeleteyear4teacher] = useState<string | null>(null);
    const [deleteYear3Teacher, setDeleteyear3teacher] = useState<string | null>(null);

    const [updateUrl, setUpdateUrl] = useState("");
    const [updateName, setUpdateName] = useState("");
    const [updateSurname, setUpdateSurname] = useState("");
    const [updatePhone, setUpdatePhone] = useState("");
    const [editId, setEditId] = useState("");

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

    const fetchAll = () => {
      fetchPresidentInfo();
      fetchYear4Teacher();
      fetchYear3Teacher();
    }

    useEffect(() => {
      fetchAll();
    }, []);

    const EditPresiden1 = () => {
      const ID = presidentData[0].id ;
      const Url = presidentData[0].url ;
      const name = presidentData[0].name ;
      const surname = presidentData[0].surname ;
      const phone = presidentData[0].phone ;
      setIsModalOpen(true);
      setEditId(ID);
      setUpdateUrl(Url);
      setUpdateName(name);
      setUpdateSurname(surname);
      setUpdatePhone(phone);
    }

    const EditPresiden2 = () => {
      const ID = presidentData[1].id ;
      const Url = presidentData[1].url ;
      const name = presidentData[1].name ;
      const surname = presidentData[1].surname ;
      const phone = presidentData[1].phone ;
      setIsModalOpen(true);
      setEditId(ID);
      setUpdateUrl(Url);
      setUpdateName(name);
      setUpdateSurname(surname);
      setUpdatePhone(phone);
    }

    const EditPresiden3 = () => {
      const ID = presidentData[2].id ;
      const Url = presidentData[2].url ;
      const name = presidentData[2].name ;
      const surname = presidentData[2].surname ;
      const phone = presidentData[2].phone ;
      setIsModalOpen(true);
      setEditId(ID);
      setUpdateUrl(Url);
      setUpdateName(name);
      setUpdateSurname(surname);
      setUpdatePhone(phone);
    }

    const handleUpdatePresident = async() => {
          try {
            await updatePresidentInfo(editId, {
              url: updateUrl,
              name: updateName,
              surname: updateSurname,
              phone: updatePhone,
            });
            setIsModalOpen(false);
            setUpdateUrl("");
            setUpdateName("");
            setUpdateSurname("");
            setUpdatePhone("");
            fetchAll();
          } catch (err) {
            console.error("Update failed", err);
          }
    }

    const handleDeleteYear4Teacher = async () => {
          if (deleteYear4Teacher) {
            await DeleteYear4Teacher({ deleteId: deleteYear4Teacher });
            fetchAll();
            setDeleteyear4teacher(null);
          }
        };

    const handleDeleteYear3Teacher = async () => {
          if (deleteYear3Teacher) {
            await DeleteYear3Teacher({ deleteId: deleteYear3Teacher });
            fetchAll();
            setDeleteyear3teacher(null);
          }
        };

    return(
        <>
        <NavAdmin></NavAdmin>
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
                      <button onClick={()=> EditPresiden1()} className="bg-yellow-500 hover:bg-yellow-700 rounded-xl text-white p-2">Edit</button>
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
                        <button onClick={()=> EditPresiden2()}  className="bg-yellow-500 hover:bg-yellow-700 rounded-xl text-white p-2">Edit</button>
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
                        <button onClick={()=> EditPresiden3()}  className="bg-yellow-500 hover:bg-yellow-700 rounded-xl text-white p-2">Edit</button>
                      </div>
                    </div>
                  )}
                </div>
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
                          placeholder="New Url"
                          className="border border-blue-300 rounded-lg px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
                          value={updateUrl}
                          onChange={(e) => setUpdateUrl(e.target.value)}
                        />
                        <input
                          type="text"
                          placeholder="New Name"
                          className="border border-blue-300 rounded-lg px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
                          value={updateName}
                          onChange={(e) => setUpdateName(e.target.value)}
                        />
                        <input
                          type="tel"
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
                      </div>
              
                      <div className="mt-6 flex justify-between">
                        <button
                          onClick={() => setIsModalOpen(false)}
                          className="px-4 py-2 rounded-lg bg-white border border-gray-300 text-gray-700 hover:bg-gray-100 transition"
                        >
                          ❌ Cancel
                        </button>
                        <button
                          onClick={handleUpdatePresident}
                          className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition"
                        >
                          ✅ Yes, Update
                        </button>
                      </div>
                    </div>
                  </div>
                )}
                
              {/* Year 4 Section */}
              <div className="flex flex-col items-center bg-white rounded-xl shadow-lg w-full mx-auto mt-5 border border-blue-200">
                <div className="flex flex-col items-center justify-center bg-blue-600 w-full p-5 rounded-t-2xl">
                  <div className="flex flex-row gap-5 content-center items-center">
                    <h1 className="text-white text-xl font-bold">YEAR 4</h1>
                    <ADDyear4Teacher></ADDyear4Teacher>
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
                      <div className="flex flex-row gap-4">
                        <button onClick={()=> setDeleteyear4teacher(teacher.id)} className="text-white hover:bg-red-700 bg-red-500 p-3 rounded-xl">Delete</button>
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
                    <ADDyear3Teacher></ADDyear3Teacher>
                  </div>
                </div>
                <div className="p-4 bg-blue-50 w-full flex flex-col gap-4 rounded-b-xl">
                  {teacheryear3.map(teacher=>(
                    <div key={teacher.id} className="flex flex-row justify-between bg-white border border-blue-200 p-4 rounded-2xl items-center shadow-sm">
                    <div className="flex flex-row gap-2">
                      <img className="w-[50px] h-[50px] rounded-full bg-blue-300" />
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
                      <div className="flex flex-row gap-4">
                        <button onClick={()=> setDeleteyear3teacher(teacher.id)} className="text-white hover:bg-red-700 bg-red-500 p-3 rounded-xl">Delete</button>
                      </div>
                    </div>
                  ))}

                </div>
              </div>
            </div>

            {deleteYear4Teacher && (
              <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                <div className="bg-white rounded-xl shadow-lg p-6 max-w-sm w-full text-center">
                  <h2 className="text-lg font-semibold mb-4 text-red-600">⚠️ Confirm Delete</h2>
                  <p className="mb-6">Are you sure you want to delete this user?</p>
                  <div className="flex justify-between gap-4">
                    <button
                      onClick={() => setDeleteyear4teacher(null)}
                      className="px-4 py-2 rounded-lg bg-gray-200 hover:bg-gray-300 text-gray-700 w-full"
                    >
                      ❌ Cancel
                    </button>
                    <button
                      onClick={handleDeleteYear4Teacher}
                      className="px-4 py-2 rounded-lg bg-red-500 hover:bg-red-600 text-white w-full"
                    >
                      ✅ Confirm
                    </button>
                  </div>
                </div>
              </div>
            )}

            {deleteYear3Teacher && (
              <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                <div className="bg-white rounded-xl shadow-lg p-6 max-w-sm w-full text-center">
                  <h2 className="text-lg font-semibold mb-4 text-red-600">⚠️ Confirm Delete</h2>
                  <p className="mb-6">Are you sure you want to delete this user?</p>
                  <div className="flex justify-between gap-4">
                    <button
                      onClick={() => setDeleteyear3teacher(null)}
                      className="px-4 py-2 rounded-lg bg-gray-200 hover:bg-gray-300 text-gray-700 w-full"
                    >
                      ❌ Cancel
                    </button>
                    <button
                      onClick={handleDeleteYear3Teacher}
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