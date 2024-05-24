import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../firebase";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const handleSignup = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(
        signInWithEmailAndPassword(auth, email, password).then(
          updateProfile(auth.currentUser, { displayName: username })
        )
      )
      .catch((err) => {
        alert(err);
      });
  };

  return (
    <div className="flex flex-col border-[1px] border-solid border-slate-500 p-[50px] mx-[30px]">
      <img
        className="w-[200px] mx-auto mb-10"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1600px-Instagram_logo.svg.png"
      />
      <input
        onChange={(e) => setEmail(e.target.value)}
        className="bg-[#ffffff24] border-[1px] border-solid rounded-[3px] p-[12px] focus:outline-[1px] focus:outline focus:outline-zinc-500 "
        type="email"
        placeholder="Email"
        value={email}
      />
      <input
        onChange={(e) => setUsername(e.target.value)}
        className="bg-[#ffffff24] border-[1px] border-solid rounded-[3px] p-[12px] focus:outline-[1px] focus:outline focus:outline-zinc-500 "
        type="text"
        placeholder="Username"
        value={username}
      />
      <input
        onChange={(e) => setPassword(e.target.value)}
        className="bg-[#ffffff24] border-[1px] border-solid rounded-[3px] p-[12px] focus:outline-[1px] focus:outline focus:outline-zinc-500 "
        type="password"
        placeholder="Password"
        value={password}
      />
      <button
        onClick={handleSignup}
        className="p-[12px] rounded-[8px] border-0 text-white bg-[#0095f6] font-extrabold hover:cursor-pointer"
      >
        Sign Up
      </button>
    </div>
  );
}

export default Signup;
