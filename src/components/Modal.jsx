import { IoMdClose } from "react-icons/io";
import { createPortal } from "react-dom";
const Modal = ({ modalState, isClose, children }) => {
  return createPortal(
    <div className="flex items-center justify-center">
      {modalState && (
        <>
          <div className=" h-40 w-[40%] z-10 bg-white rounded-lg relative p-2">
            <IoMdClose
              className="absolute top-0 right-0 m-1 h-7 w-7"
              onClick={isClose}
            />
            {children}
          </div>
          <div
            onClick={isClose}
            className="backdrop-blur h-full w-full absolute top-0 z-0"
          />
        </>
      )}
    </div>,
    document.getElementById("modal-root")
  );
};

export default Modal;
