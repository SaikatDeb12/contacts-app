import { Field, Form, Formik } from "formik";
import Modal from "./Modal";

const AddUpdateContacts = ({ modalState, isClose }) => {
  return (
    <div>
      <Modal modalState={modalState} isClose={isClose}>
        <Formik
          initialValues={{ name: "", email: "" }}
          onSubmit={(value) => console.log(value)}
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
