import { Outlet } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <section className="contacts-page py-[50px] min-w-full min-h-[100vh] ">
        <div className=" relative border-[1px] w-full md:w-[1164px] h-[667px] container  rounded-[25px]">
          <Outlet />
        </div>
      </section>
    </>
  );
}

export default App;
