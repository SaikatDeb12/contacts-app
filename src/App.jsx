import "./App.css";
import Navbar from "./components/Navbar";
import { CiSearch } from "react-icons/ci";
import { IoIosAddCircle } from "react-icons/io";
import { useEffect, useState } from "react";
import { collection, doc, getDocs } from "firebase/firestore";
import app from "./config/firebase-config";
import { db } from "./config/firebase-config";

function App() {
  const [contacts, setContacts] = useState([]);

  return (
    <div className="App flex flex-col items-start justify-center items-center m-4 max-w-80 mx-auto">
      <Navbar />
      <div className="flex w-full items-center relative sticky">
        <CiSearch className="text-lg m-1 absolute text-white " />
        <input
          type="text"
          className="border flex-grow border-white rounded-lg bg-transparent text-left  h-9 text-white pl-6 font-little"
          placeholder="Search Contact "
          input
        />
        <IoIosAddCircle className="text-white text-5xl cursor-pointer" />
      </div>
    </div>
  );
}

export default App;
