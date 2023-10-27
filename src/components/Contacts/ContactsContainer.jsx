import Pagination from "../Utility/Pagination";
import { IoMdAdd } from "react-icons/io";
import ContactsList from "./ContactsList";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getContacts, deleteContacts } from "../../store/contactsSlice";
import { useState } from "react";
const ContactsContainer = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.isLoading);
  const contactsData = useSelector((state) => state.contacts);

  const [search, setSearch] = useState("");

  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);
  return (
    <div className="">
      <div className="px-[60px]">
        <input
          type="text"
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search by name"
          className="w-full h-[45px] px-5 rounded-[25px] outline-none my-10 "
        />
        <div className="flex justify-end">
          <Link to="/add-contact">
            <button className="flex items-center justify-center w-[217px] h-[61px] bg-[#1BB0F0] text-[#fff] rounded-[25px]">
              <IoMdAdd className="text-[30px] font-bold" />
              New Contact
            </button>
          </Link>
        </div>
        <ContactsList
          isLoading={isLoading}
          contactsData={contactsData.data}
          search={search}
          deleteContacts={deleteContacts}
          dispatch={dispatch}
        />
        <Pagination />
      </div>
    </div>
  );
};

export default ContactsContainer;
