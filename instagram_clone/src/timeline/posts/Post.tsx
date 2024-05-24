import React from "react";
import Avatar from "@mui/material/Avatar";
import MoreOptionsIcon from "@mui/icons-material/MoreHoriz";
import FavoritesIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ChatIcon from "@mui/icons-material/ChatBubbleOutline";
import ShareIcon from "@mui/icons-material/SendOutlined";
import BookmarkIcon from "@mui/icons-material/BookmarkBorderOutlined";

// https://fakerjs.dev/api/image.html#avatar
import { faker } from "@faker-js/faker";

export interface PostProps {
  user: string;
  image_url: string;
  image_alt: string;
  timestamp: string;
  likes: number;
}

// PostProps interface defined in Timeline.tsx
//function Post(props: PostProps) {
function Post({ user, image_url, image_alt, timestamp, likes }: PostProps) {
  return (
    <div className="w-[40.625rem] mt-8 mb-12 ml-10 mr-10">
      <div className="flex flex-row justify-between items-center mb-2.5 font-insta">
        <div className="flex flex-row justify-between font-extrabold text-base hover:cursor-pointer">
          <Avatar className="mr-2.5">
            <img src={faker.image.avatarLegacy()} />
          </Avatar>
          {user}
          <span className="text-slate-500 text-sm ml-1">• {timestamp}</span>
        </div>
        <div className="hover:cursor-pointer">
          <MoreOptionsIcon />
        </div>
      </div>
      <div>
        <img
          className="w-full rounded-md border border-solid border-slate-500"
          src={image_url}
          alt={image_alt}
        />
      </div>
      <div className="font-insta">
        <div className="flex flex-row items-center justify-between">
          <div className="w-[7.5rem]  flex flex-row items-center justify-between">
            <FavoritesIcon className="text-3xl hover:cursor-pointer hover:text-slate-500 " />
            <ChatIcon className="text-3xl hover:cursor-pointer hover:text-slate-500 " />
            <ShareIcon
              className="text-3xl hover:cursor-pointer hover:text-slate-500 mt-[-.625rem] -rotate-[35deg] text-[31px]"
              id="send-icon"
            />
          </div>
          <div>
            <BookmarkIcon className="text-3xl hover:cursor-pointer hover:text-slate-500 " />
          </div>
        </div>
        <span>{likes} likes</span>
      </div>
    </div>
  );
}

export default Post;
