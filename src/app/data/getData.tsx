"use client";
import { db } from "../../../lib/firebase";
import { addDoc, collection, getDocs, doc, updateDoc, deleteDoc, query, orderBy, serverTimestamp } from "firebase/firestore";

const usersRef = collection(db, 'users');

    export const firebaseAddUser = async({name, surname,phone, url}:{name:string, surname:string, phone:string, url:string}) => {
        await addDoc(usersRef,{
            name,
            surname,
            phone,
            url,
        });
    };

    export const Addteachercontactyear4 = async ({url, name, surname, phone}:{url:string, name:string, surname:string, phone:string}) => {
      try {
        await addDoc(collection(db, "teachercontactyear4"), {
          url: url,
          name: name,
          surname: surname,
          phone: phone,
          date: serverTimestamp(),
        });
      } catch (error) {
        console.error("Error adding document:", error);
        alert("❌ Failed to add. Check your connection.");
      }
    };

    export const Addteachercontactyear3 = async ({url, name, surname, phone}:{url:string, name:string, surname:string, phone:string}) => {
      try {
        await addDoc(collection(db, "teachercontactyear3"), {
          url: url,
          name: name,
          surname: surname,
          phone: phone,
          date: serverTimestamp(),
        });
      } catch (error) {
        console.error("Error adding document:", error);
        alert("❌ Failed to add. Check your connection.");
      }
    };

    export const firebaseGetUsers = async () => {
      const q = query(collection(db, "users"), orderBy("date", "desc")); 
      const snapshot = await getDocs(q);

      return snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
    };

    export const getPresidentInfo = async () => {
      const q = query(collection(db, "presidentdata"), orderBy("date", "desc")); 
      const snapshot = await getDocs(q);

      return snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
    };

    export const getYear4Teacher = async() => {
      const q = query(collection(db, "teachercontactyear4"), orderBy("date", "desc")); 
      const snapshot = await getDocs(q);

      return snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
    }

    export const getYear3Teacher = async() => {
      const q = query(collection(db, "teachercontactyear3"), orderBy("date", "desc")); 
      const snapshot = await getDocs(q);

      return snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
    }


    export const firebaseHandleUpdate = async ({userId,updatePhone}:{userId:string, updatePhone:string}) => {
    const userDoc = doc(db, 'users', userId);
    await updateDoc(userDoc, { Phone: String(updatePhone) });
    };

    export const updatePresidentInfo = async (
      id: string,
      data: { name: string; surname: string; phone: string; url: string }
    ) => {
      const ref = doc(db, "presidentdata", id);
      await updateDoc(ref, data);
    };


    export const firebaseHandleDelete = async ({deleteId}:{deleteId:string}) => {
    const userDoc = doc(db, 'users', deleteId);
    await deleteDoc(userDoc);
    };

    export const firebaseHandleDeleteUser = async (id : string) => {
    const userDoc = doc(db, 'users', id);
    await deleteDoc(userDoc);
    };
    
    export const DeleteYear4Teacher = async ({deleteId}:{deleteId:string}) => {
    const userDoc = doc(db, 'teachercontactyear4', deleteId);
    await deleteDoc(userDoc);
    };

    export const DeleteYear3Teacher = async ({deleteId}:{deleteId:string}) => {
    const userDoc = doc(db, 'teachercontactyear3', deleteId);
    await deleteDoc(userDoc);
    };

