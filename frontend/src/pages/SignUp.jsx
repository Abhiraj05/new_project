import React ,{useState} from "react";
import Loader from "../components/Loader";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();
  const [loading, setloadervalue] = useState(false);
  const activateLoader = () => {
    setloadervalue(true);
    setTimeout(() => {
      setloadervalue(false);
      navigate("/signin");
    }, 1500);
  };
  return (
    <>
      {loading && <Loader/>}
      <main className="bg-gradient-to-br from-primary via-blue-600 to-accent grid place-items-center h-screen border">
        <div className=" bg-white text-center  pt-8 pb-8  md:pt-10 md:pb-10 pr-8 pl-8 rounded-2xl">
          <h3 className="capitalize text-[28px] mb-5 text-black font-bold">
            sign up
          </h3>
          <form action="#" className="text-center">
            <div>
               <div className="text-left mb-2">
              <label htmlFor="username" className="capitalize text-gray-700 md:text-[15px] text-[14px]">username*</label>
              </div>
              <input
                className="border  border-gray-500 w-66 h-10 md:w-80 md:h-12 mb-6 rounded-xl pl-5 placeholder:capitalize placeholder:text-[14px]"
                type="text"
                placeholder="enter the username"
              />
            </div>
            <div>
               <div className="text-left mb-2">
              <label htmlFor="password" className="capitalize text-gray-700 md:text-[15px] text-[14px]">password*</label>
              </div>
              <input
                className="border  border-gray-500 w-66 h-10 md:w-80 md:h-12 mb-6 rounded-xl pl-5 placeholder:capitalize placeholder:text-[14px]"
                type="password"
                placeholder="enter the password"
              />
            </div>
            <div>
                <div className="text-left mb-2">
              <label htmlFor="confirm password" className="capitalize text-gray-700 md:text-[15px] text-[14px]">confirm password*</label>
              </div>
              <input
                className="border  border-gray-500 w-66 h-10 md:w-80 md:h-12 mb-10 rounded-xl pl-5 placeholder:capitalize placeholder:text-[14px]"
                type="password"
                placeholder="enter the confirm password"
              />
            </div>
            <div>
              <button className="hover:bg-white hover:border-cyan-500 hover:border  hover:rounded-lg  hover:text-cyan-500 bg-accent bg-cyan-500 text-white font-semibold capitalize border pt-2 pb-2 md:px-30 px-24 rounded-xl md:text-[17px] text-[15px]">
                submit
              </button>
            </div>
            <div className="flex justify-center items-center gap-2 capitalize mt-4 text-[14px]">
              <div>
                <p>already have an account ?</p>
              </div>
              <div>
                <button type="button" className="hover:text-cyan-500 capitalize text-blue-600"  onClick={activateLoader} >signin</button>
              </div>
            </div>
          </form>
        </div>
      </main>
    </>
  );
};
export default SignUp;
