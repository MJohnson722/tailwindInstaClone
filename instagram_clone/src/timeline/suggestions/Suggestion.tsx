import React from "react";
import Avatar from "@mui/material/Avatar";
import { faker } from "@faker-js/faker";

export interface SuggestionProps {
  username: string;
  message: string;
}

function Suggestion({ username, message }: SuggestionProps) {
  return (
    <div className="flex flex-row justify-between mb-2.5">
      <div className="flex flex-row hover:cursor-pointer">
        <div className="mr-2.5">
          <Avatar>
            <img src={faker.image.avatar()} />
          </Avatar>
        </div>
        <div className="flex flex-col">
          <span className="font-extrabold">{username}</span>
          <span className="font-extralight text-sm">{message}</span>
        </div>
      </div>
      <button className="bg-none border-none text-corn-flower-blue font-bold hover:cursor-pointer hover:text-zinc-500">
        Follow
      </button>
    </div>
  );
}

export default Suggestion;
