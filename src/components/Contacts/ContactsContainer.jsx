import Pagination from "../Utility/Pagination";
import Search from "../Utility/Search";
import { IoMdAdd } from "react-icons/io";
import ContactsList from "./ContactsList";
import { Link } from "react-router-dom";
const ContactsContainer = () => {
  return (
    <div className="">
      <div className="px-[60px]">
        <Search />
        <div className="flex justify-end">
          <Link to="/add-contact">
            <button className="flex items-center justify-center w-[217px] h-[61px] bg-[#1BB0F0] text-[#fff] rounded-[25px]">
              <IoMdAdd className="text-[30px] font-bold" />
              New Contact
            </button>
          </Link>
        </div>
        <ContactsList />
        <Pagination />
      </div>
    </div>
  );
};

export default ContactsContainer;
