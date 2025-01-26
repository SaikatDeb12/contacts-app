import { useState } from "react";

const useModal = () => {
  const [modalState, setModalState] = useState(false);

  const isOpen = () => {
    setModalState(true);
  };

  const isClose = () => {
    setModalState(false);
  };

  return { modalState, isOpen, isClose };
};

export default useModal;
