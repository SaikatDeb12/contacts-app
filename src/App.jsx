import "./App.css";
import Navbar from "./components/Navbar";
import { CiSearch } from "react-icons/ci";
import { IoIosAddCircle } from "react-icons/io";
import { useEffect, useState } from "react";
import {
  collection,
  getDocs,
  onSnapshot,
  snapshotEqual,
} from "firebase/firestore";
import { db } from "./config/firebase-config";
import ContactCard from "./components/ContactCard";
import AddUpdateContacts from "./components/AddUpdateContacts";
import useModal from "./hooks/useModal";
import { ToastContainer, toast } from "react-toastify";

function App() {
  const [contacts, setContacts] = useState([]);

  const { modalState, isOpen, isClose } = useModal();

  useEffect(() => {
    const getContacts = async () => {
      try {
        const contactsRef = collection(db, "contacts");
        console.log("Fetching");
        // const contactSnapshot = await getDocs(contactsRef);

        onSnapshot(contactsRef, (snapshot) => {
          const contactList = snapshot.docs.map((doc) => {
            console.log("Data", doc.data());
            return { id: doc.id, ...doc.data() };
          });
          console.log("Fetched contacts: ", contactList);
          setContacts(contactList);
        });
      } catch (error) {
        console.log(error);
      }
    };

    getContacts();
  }, []);

  const searchContacts = (event) => {
    const value = event.target.value;
    const contactsRef = collection(db, "contacts");
    onSnapshot(contactsRef, (snapshot) => {
      const contactList = snapshot.docs.map((doc) => {
        console.log("Data", doc.data());
        return { id: doc.id, ...doc.data() };
      });

      const filteredContacts = contactList.filter((ele) => {
        return ele.name.toLowerCase().includes(value.toLowerCase());
      });
      setContacts(filteredContacts);
      return filteredContacts;
    });
  };

  return (
    <>
      <div className="App flex flex-col justify-center items-center m-4 max-w-80 mx-auto">
        <Navbar />
        <div className="flex w-full items-center relative gap-2">
          <CiSearch className="text-lg m-1 absolute left-2 text-white " />
          <input
            type="text"
            className="border-2 flex-grow flex items-center border-white rounded-lg bg-transparent h-9 text-white pl-8 font-little"
            onChange={searchContacts}
            placeholder="Search Contact "
          />
          <IoIosAddCircle
            className="text-white text-5xl cursor-pointer"
            onClick={isOpen}
          />
        </div>
        <div className="mt-3">
          {contacts.map((item) => (
            <ContactCard item={item} key={item.id} />
          ))}
        </div>
      </div>
      <AddUpdateContacts modalState={modalState} isClose={isClose} />
      <ToastContainer />
    </>
  );
}

export default App;
