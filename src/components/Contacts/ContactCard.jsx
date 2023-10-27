import { FaEdit } from "react-icons/fa";
import { RiDeleteBin5Fill } from "react-icons/ri";
const ContactCard = ({
  id,
  image,
  firstName,
  lastName,
  deleteContacts,
  dispatch,
}) => {
  return (
    <div className=" flex  justify-between items-center border-b-[2px] n text-[#fff] text-[20px] font-medium my-[20px]  py-[8px] ">
      <div className="flex items-center gap-[10px]">
        <img src={image} className=" rounded-full" />
        <div className=" leading-[1.8]">
          <span> {firstName}</span> <span>{lastName}</span>
          <div>01032884845</div>
        </div>
      </div>
      <div className="text-[25px] flex gap-2">
        <FaEdit className="text-[#1BB0F0]  bg-white p-1 cursor-pointer" />
        <RiDeleteBin5Fill
          onClick={() => dispatch(deleteContacts(id))}
          className="text-red-500 bg-white p-1 cursor-pointer"
        />
      </div>
    </div>
  );
};

export default ContactCard;
