import Modal from "./Modal";

const AddUpdateContacts = ({ modalState, isClose }) => {
  return (
    <div>
      <Modal modalState={modalState} isClose={isClose}>
        HI This is a text
      </Modal>
    </div>
  );
};

export default AddUpdateContacts;
