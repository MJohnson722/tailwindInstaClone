import React, { useState } from "react";
import Login from "./Login";
import Signup from "./Signup";

function Authentication() {
  const [active, setActive] = useState("login");
  const handleChange = () => {
    setActive(active === "login" ? "signup" : "login");
  };
  return (
    <div className="flex flex-row items-center my-0 mx-[50px]">
      <div className="basis-1/2 text-center h-screen">
        <img
          className="w-[400px] mt-[40px]"
          src="https://i.imgur.com/P3Vm1Kp.png"
        />
      </div>
      <div className="basis-1/2">
        {active === "login" ? <Login /> : <Signup />}
        <div className="border-solid border-zinc-500 border-[1px] p-[20px] mx-[30px] text-center m-[15]">
          <span className="font-medium text-[14px]">
            {active === "login" ? (
              <>
                Dont have an account?
                <button
                  onClick={handleChange}
                  className="bg-none text-[#0095f6] font-extrabold border-0 hover:cursor-pointer"
                >
                  Sign up
                </button>
              </>
            ) : (
              <>
                Have an account?
                <button
                  onClick={handleChange}
                  className="bg-none text-[#0095f6] font-extrabold border-0 hover:cursor-pointer"
                >
                  Log In
                </button>
              </>
            )}
          </span>
        </div>
      </div>
    </div>
  );
}

export default Authentication;
