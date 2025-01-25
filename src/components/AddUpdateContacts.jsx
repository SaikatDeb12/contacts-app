import { Field, Form, Formik } from "formik";
import Modal from "./Modal";
import { addDoc, collection, deleteDoc } from "firebase/firestore";
import { db } from "../config/firebase-config";

const AddUpdateContacts = ({ modalState, isClose }) => {
  const addContact = async (details) => {
    try {
      const contactRef = collection(db, "contacts");
      await addDoc(contactRef, details);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <Modal modalState={modalState} isClose={isClose}>
        <Formik
          initialValues={{ name: "", email: "" }}
          onSubmit={(value) => addContact(value)}
        >
          <Form>
            <div className="flex flex-col gap-1">
              <>
                <label htmlFor="name">Name: </label>
                <Field name="name" className="border rounded-sm" />
              </>
              <>
                <label htmlFor="email">Email: </label>
                <Field name="email" className="border rounded-sm" />
              </>
              <button className="bg-[#F6820C] p-1 self-end rounded-md ">
                Add to Contacts
              </button>
            </div>
          </Form>
        </Formik>
      </Modal>
    </div>
  );
};

export default AddUpdateContacts;
