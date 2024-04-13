import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../avatar";

const NavComponent = () => {
  return (
    <div className="w-full h-20 px-52 mx-auto border-b border-gray-200">
      <div className="flex justify-between items-center pt-5">
        <h1 className="font-semibold text-lg">MMS</h1>
        <div>
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </div>
  );
};

export default NavComponent;
