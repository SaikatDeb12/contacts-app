import { Field, Form, Formik } from "formik";
import Modal from "./Modal";
import { addDoc, collection, doc, updateDoc } from "firebase/firestore";
import { db } from "../config/firebase-config";
import { toast } from "react-toastify";

const AddUpdateContacts = ({ item, modalState, isClose, isUpdate }) => {
  const addContact = async (details) => {
    try {
      console.log("Adding contact:", details);
      const contactRef = collection(db, "contacts");
      await addDoc(contactRef, details);
      console.log("Contact added successfully");
      isClose();
      toast.success("Contact added successfully");
    } catch (err) {
      console.error("Error adding contact:", err);
    }
  };

  const updateContact = async (details, id) => {
    try {
      console.log("Updating contact:", details, "with ID:", id);
      const contactRef = doc(db, "contacts", id);
      await updateDoc(contactRef, details);
      console.log("Contact updated successfully");
      isClose();
      toast.success("Contact edited successfully");
    } catch (err) {
      console.error("Error updating contact:", err);
    }
  };

  return (
    <div>
      <Modal modalState={modalState} isClose={isClose}>
        <Formik
          initialValues={{
            name: isUpdate ? item.name : "",
            email: isUpdate ? item.email : "",
          }}
          onSubmit={(value) =>
            isUpdate ? updateContact(value, item.id) : addContact(value)
          }
        >
          <Form>
            <div className="flex flex-col gap-1">
              <label htmlFor="name">Name: </label>
              <Field name="name" className="border rounded-sm" />
              <label htmlFor="email">Email: </label>
              <Field name="email" className="border rounded-sm" />
              <button
                type="submit" // Corrected button type
                className="bg-[#F6820C] p-1 self-end rounded-md "
              >
                {isUpdate ? "Edit Contact" : "Add to Contacts"}
              </button>
            </div>
          </Form>
        </Formik>
      </Modal>
    </div>
  );
};

export default AddUpdateContacts;
