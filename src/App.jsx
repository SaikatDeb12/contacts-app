import "./App.css";
import Navbar from "./components/Navbar";
import { CiSearch } from "react-icons/ci";
import { IoIosAddCircle } from "react-icons/io";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import app from "./config/firebase-config";
import { db } from "./config/firebase-config";
import { MdDelete } from "react-icons/md";
import { MdAccountCircle } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";

function App() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const getContacts = async () => {
      try {
        const contactsRef = collection(db, "contacts");
        console.log("Fetching");
        const contactSnapshot = await getDocs(contactsRef);
        // console.log(contactSnapshot.docs);
        const contactList = contactSnapshot.docs.map((doc) => {
          console.log("Data", doc.data());
          return { id: doc.id, ...doc.data() };
        });
        console.log("Fetched contacts: ", contactList);
        setContacts(contactList);
      } catch (error) {
        console.log(error);
      }
    };

    getContacts();
  }, []);

  return (
    <div className="App flex flex-col justify-center items-center m-4 max-w-80 mx-auto">
      <Navbar />
      <div className="flex w-full items-center relative gap-2">
        <CiSearch className="text-lg m-1 absolute left-2 text-white " />
        <input
          type="text"
          className="border-2 flex-grow flex items-center border-white rounded-lg bg-transparent h-9 text-white pl-8 font-little"
          placeholder="Search Contact "
        />
        <IoIosAddCircle className="text-white text-5xl cursor-pointer" />
      </div>
      <div>
        {contacts.map((item) => (
          <div
            className="bg-[#ffeaae] flex w-full h-50 pl-5 pr-5 pt-2 pb-2 rounded-lg items-center justify-evenly "
            key={item.id}
          >
            <MdAccountCircle className="h-12 w-12 text-[#F6820C]" />
            <div className="font-semibold flex-grow-2 ml-5 mr-5">
              <h1>{item.name}</h1>
              <p>{item.email}</p>
            </div>
            <div className="flex m-2">
              <FaRegEdit className="h-7 w-7 mr-1" />
              <MdDelete className="h-7 w-7 text-[#F6820C]" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
