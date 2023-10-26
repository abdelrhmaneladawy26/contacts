import { useRef } from "react";
import { useDispatch } from "react-redux";
import { insertContacts } from "../../store/contactsSlice";

import img from "../../../public/assets/Ellipse.png";

const AddContactForm = () => {
  const firstName = useRef(null);
  const lastName = useRef(null);
  const email = useRef(null);
  const dispatch = useDispatch();
  const handelSubmit = (e) => {
    e.preventDefault();
    const data = {
      firstName: firstName.current.value,
      lastName: lastName.current.value,
      email: email.current.value,
    };
    dispatch(insertContacts(data));
  };

  return (
    <div className=" container bg-white w-full h-full  rounded-[25px] ">
      <div className="flex flex-col py-[70px] gap-[25px] items-center justify-center">
        <img src={img} alt="image" />
        <h2> Upload Photo</h2>
      </div>
      <div className="flex flex-col items-center justify-center">
        <form
          onSubmit={handelSubmit}
          className=" relative w-[90%] grid grid-cols-1 md:grid-cols-2  gap-[27px]"
        >
          <input
            type="text"
            ref={firstName}
            required
            placeholder="First Name"
            className="border-[1px] p-3 rounded-[25px]"
          />
          <input
            type="text"
            ref={lastName}
            required
            placeholder="Last Name"
            className="border-[1px] p-3 rounded-[25px]"
          />
          <input
            type="text"
            placeholder="Phone Number"
            className="border-[1px] p-3 rounded-[25px]"
          />
          <input
            type="email"
            ref={email}
            required
            placeholder="Email"
            className="border-[1px] p-3 rounded-[25px]"
          />
          <button className="bg-[#D9D9D9] w-[100px]  md:w-[217px] h-[61px] rounded-[25px] ">
            Cancel
          </button>
          <button
            type="submit"
            className="bg-[#1BB0F0] text-white w-[100px] md:w-[217px] h-[61px] rounded-[25px] "
          >
            Save
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddContactForm;
