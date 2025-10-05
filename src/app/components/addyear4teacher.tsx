"use client";
import { useState } from "react";
import { Addteachercontactyear4 } from "../data/getData";

export default function ADDyear4Teacher() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [ImgUrl, setImagUrl] = useState("");
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [phone, setPhone] = useState("");

  const AddteachercontactYear4 = async() => {
    if(!name || !surname || !phone){
      alert("Please Fill the box all except Url can leave empty");
    }else{
        try{
          Addteachercontactyear4({
            url: ImgUrl,
            name: name,
            surname: surname,
            phone: phone,
          })
          alert("Add teacher SUCCESSFULLY");
          setImagUrl("");
          setName("");
          setSurname("");
          setPhone("");
          setMenuOpen(false);
        }catch(error){
          alert("Fails Add please Check your internet");
          console.error(error);
        }
    }
  }
      


  return (
    <>
      <div className="bg-yellow-500 hover:bg-yellow-700 p-2 rounded-xl">
        {/* Mobile Toggle Button */}
        <button
          className="text-white"
          onClick={() => setMenuOpen(true)}
        >
          Add
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="fixed inset-0 bg-gray-300 bg-opacity-50 flex items-center justify-center z-50 px-4 backdrop-blur-3xl">
            <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-6 animate-fade-in">
              <h2 className="text-2xl font-bold text-blue-600 mb-4 text-center">
                ✏️ Update Your Info
              </h2>

              <div className="space-y-3">
                <input
                  type="text"
                  placeholder="IMG Url"
                  className="border border-blue-300 rounded-lg px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
                  value={ImgUrl}
                  onChange={(e) => setImagUrl(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Name Teacher"
                  className="border border-blue-300 rounded-lg px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Surname Teacher"
                  className="border border-blue-300 rounded-lg px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
                  value={surname}
                  onChange={(e) => setSurname(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Phone Teacher"
                  className="border border-blue-300 rounded-lg px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>

              <div className="mt-6 flex justify-between">
                <button
                  onClick={() => setMenuOpen(false)}
                  className="px-4 py-2 rounded-lg bg-white border border-gray-300 text-gray-700 hover:bg-gray-100 transition"
                >
                  ❌ Cancel
                </button>
                <button
                  onClick={AddteachercontactYear4}
                  className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition"
                >
                  ✅ Yes, Add
                </button>
              </div>
            </div>
          </div>
      )}
    </>
  );
}