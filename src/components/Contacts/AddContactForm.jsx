import { Link } from "react-router-dom";
import img from "../../../public/assets/Ellipse.png";
const AddContactForm = () => {
  return (
    <div className=" container bg-white w-full h-full  rounded-[25px] ">
      <div className="flex flex-col py-[70px] gap-[25px] items-center justify-center">
        <img src={img} alt="image" />
        <h2> Upload Photo</h2>
      </div>
      <div className="flex flex-col items-center justify-center">
        <form className=" relative w-[90%] grid grid-cols-1 md:grid-cols-2  gap-[27px]">
          <input
            type="text"
            placeholder="First Name"
            className="border-[1px] p-3 rounded-[25px]"
          />
          <input
            type="text"
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
            placeholder="Email"
            className="border-[1px] p-3 rounded-[25px]"
          />
        </form>
      </div>
      <div className=" absolute bottom-5 w-full flex  justify-between px-[60px]  ">
        <Link to="/">
          <button className="bg-[#D9D9D9] w-[100px]  md:w-[217px] h-[61px] rounded-[25px] ">
            Cancel
          </button>
        </Link>
        <Link to="/">
          <button className="bg-[#1BB0F0] text-white w-[100px] md:w-[217px] h-[61px] rounded-[25px] ">
            Save
          </button>
        </Link>
      </div>
    </div>
  );
};

export default AddContactForm;
