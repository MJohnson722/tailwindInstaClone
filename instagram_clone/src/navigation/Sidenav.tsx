import React from "react";

// note how the imported name can be changed relative to the actual
// icon's name given by @mui (e.g., MoreIcon vs MenuOutlineIcon)
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import ExploreIcon from "@mui/icons-material/ExploreOutlined";
import ReelsIcon from "@mui/icons-material/SlideshowOutlined";
import MessagesIcon from "@mui/icons-material/SendOutlined";
import NotificationsIcon from "@mui/icons-material/FavoriteBorderOutlined";
import CreateIcon from "@mui/icons-material/AddBoxOutlined";
import MoreIcon from "@mui/icons-material/MenuOutlined";
import { Avatar } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../features/userSlice";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";

function Sidenav() {
  const user = useSelector((state) => state.data.user.user);
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logoutUser());
    signOut(auth);
  };

  let url =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1600px-Instagram_logo.svg.png";

  return (
    <div className="fixed flex flex-col justify-between z-1">
      <a href="https://www.instagram.com/">
        <img
          className="w-32 m-6 hover:cursor-pointer"
          src={url}
          alt="instagram logo"
        />{" "}
      </a>

      <div className="flex flex-col">
        <button className="group flex flex-row items-center bg-none border-none mx-1.5 my-2.5 rounded-2xl w-full hover:cursor-pointer hover:bg-neutral-400/10">
          {/* wrap the @mui icon in its own wrapper div so that the div size
              can remain fixed while the icon is resized on hover, without
              affecting the span's text within the button */}
          <div className="w-8 h-8">
            <HomeIcon className="text-2xl mt-0.5 ml-0 text-3xl mt-0 ml-0 transition-all duration-150 ease-linear delay-0 group-hover:text-3xl group-hover:mt-0 group-hover:ml-0 group-hover:transition-all group-hover:duration-150 group-hover:ease-linear group-hover:delay-0" />
          </div>
          <span>Home</span>
        </button>

        <button className="group flex flex-row items-center bg-none border-none mx-1.5 my-2.5 rounded-2xl w-full hover:cursor-pointer hover:bg-neutral-400/10">
          <div className="w-8 h-8">
            <SearchIcon className="text-2xl mt-0.5 ml-0 text-3xl mt-0 ml-0 transition-all duration-150 ease-linear delay-0 group-hover:text-3xl group-hover:mt-0 group-hover:ml-0 group-hover:transition-all group-hover:duration-150 group-hover:ease-linear group-hover:delay-0" />
          </div>
          <span>Search</span>
        </button>

        <button className="group flex flex-row items-center bg-none border-none mx-1.5 my-2.5 rounded-2xl w-full hover:cursor-pointer hover:bg-neutral-400/10">
          <div className="w-8 h-8">
            <ExploreIcon className="text-2xl mt-0.5 ml-0 text-3xl mt-0 ml-0 transition-all duration-150 ease-linear delay-0 group-hover:text-3xl group-hover:mt-0 group-hover:ml-0 group-hover:transition-all group-hover:duration-150 group-hover:ease-linear group-hover:delay-0" />
          </div>
          <span>Explore</span>
        </button>

        <button className="group flex flex-row items-center bg-none border-none mx-1.5 my-2.5 rounded-2xl w-full hover:cursor-pointer hover:bg-neutral-400/10">
          <div className="w-8 h-8">
            <ReelsIcon className="text-2xl mt-0.5 ml-0 text-3xl mt-0 ml-0 transition-all duration-150 ease-linear delay-0 group-hover:text-3xl group-hover:mt-0 group-hover:ml-0 group-hover:transition-all group-hover:duration-150 group-hover:ease-linear group-hover:delay-0" />
          </div>
          <span>Reels</span>
        </button>

        <button className="group flex flex-row items-center bg-none border-none mx-1.5 my-2.5 rounded-2xl w-full hover:cursor-pointer hover:bg-neutral-400/10">
          <div className="w-8 h-8">
            <MessagesIcon
              className="text-2xl mt-0.5 ml-0 text-3xl mt-0 ml-0 transition-all duration-150 ease-linear delay-0 group-hover:text-3xl group-hover:mt-0 group-hover:ml-0 group-hover:transition-all group-hover:duration-150 group-hover:ease-linear group-hover:delay-0"
              id="messages-icon"
            />
          </div>
          <span>Message</span>
        </button>

        <button className="group flex flex-row items-center bg-none border-none mx-1.5 my-2.5 rounded-2xl w-full hover:cursor-pointer hover:bg-neutral-400/10">
          <div className="w-8 h-8">
            <NotificationsIcon className="text-2xl mt-0.5 ml-0 text-3xl mt-0 ml-0 transition-all duration-150 ease-linear delay-0 group-hover:text-3xl group-hover:mt-0 group-hover:ml-0 group-hover:transition-all group-hover:duration-150 group-hover:ease-linear group-hover:delay-0" />
          </div>
          <span>Notifications</span>
        </button>

        <button className="group flex flex-row items-center bg-none border-none mx-1.5 my-2.5 rounded-2xl w-full hover:cursor-pointer hover:bg-neutral-400/10">
          <div className="w-8 h-8">
            <CreateIcon className="text-2xl mt-0.5 ml-0 text-3xl mt-0 ml-0 transition-all duration-150 ease-linear delay-0 group-hover:text-3xl group-hover:mt-0 group-hover:ml-0 group-hover:transition-all group-hover:duration-150 group-hover:ease-linear group-hover:delay-0" />
          </div>
          <span>Create</span>
        </button>

        <button className="group flex flex-row items-center bg-none border-none mx-1.5 my-2.5 rounded-2xl w-full hover:cursor-pointer hover:bg-neutral-400/10">
          <Avatar>
            {user.username ? user.username.charAt(0).toUpperCase() : "U"}
          </Avatar>
          <span>
            {user.username}
            <button
              onClick={handleLogout}
              className="text-[15px] rounded-[15px] font-bold bg-[rgba(255,255,255,0.211)] hover:cursor-pointer hover:bg-[rgba(255,255,255,0.424)] p-2.5 border-0"
            >
              Log out
            </button>
          </span>
        </button>
      </div>

      <div className="fixed bottom-1">
        <button className="group flex flex-row items-center bg-none border-none mx-1.5 my-2.5 rounded-2xl w-full hover:cursor-pointer hover:bg-neutral-400/10">
          <div className="w-8 h-8">
            <MoreIcon className="text-2xl mt-0.5 ml-0 text-3xl mt-0 ml-0 transition-all duration-150 ease-linear delay-0 group-hover:text-3xl group-hover:mt-0 group-hover:ml-0 group-hover:transition-all group-hover:duration-150 group-hover:ease-linear group-hover:delay-0" />
          </div>
          <span>More</span>
        </button>
      </div>
    </div>
  );
}

export default Sidenav;
