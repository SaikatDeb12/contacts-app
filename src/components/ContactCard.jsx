import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { VscAccount } from "react-icons/vsc";

const ContactCard = ({ item }) => {
  return (
    <div
      className="bg-[#ffeaae] mb-2 flex w-full h-50 pl-5 pr-5 pt-2 pb-2 rounded-lg items-center justify-evenly "
      key={item.id}
    >
      <VscAccount className="h-10 w-12 text-[#F6820C]" />
      <div className="font-semibold flex-grow-2 ml-5 mr-5">
        <h1>{item.name}</h1>
        <p>{item.email}</p>
      </div>
      <div className="flex m-2">
        <FaRegEdit className="h-7 w-7 mr-1" />
        <MdDelete className="h-7 w-7 text-[#F6820C]" />
      </div>
    </div>
  );
};

export default ContactCard;
