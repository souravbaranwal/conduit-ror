import React from "react";

import NavItem from "./NavItem";

const NavBar = () => (
  <nav className="shadow bg-white">
    <div className="mx-auto max-w-6xl px-2 sm:px-4 lg:px-8">
      <div className="flex h-16 justify-between">
        <div className="flex items-center  px-2 lg:px-0">
          <h1 className="-mt-1 text-2xl	 font-bold text-orange-400">Conduit</h1>
        </div>
        <div className="flex items-center justify-end gap-x-4">
          <NavItem name="Home" path="/dashboard" />
          <NavItem
            name="New Post"
            iconClass="ri-add-fill"
            path="/posts/create"
          />
          <span
            className="font-regular transition focus:outline-none inline-flex items-center
              border-b-2 border-transparent px-2 pt-1
              text-sm font-semibold leading-5  text-gray-700
              duration-150 ease-in-out
              hover:text-orange-500 focus:text-orange-500"
          >
            Sourav
          </span>
          <a
            className="transition focus:outline-none inline-flex cursor-pointer items-center
              border-b-2 border-transparent px-1 pt-1
              text-sm font-semibold leading-5
            text-gray-700 hover:text-orange-500"
          >
            LogOut
          </a>
        </div>
      </div>
    </div>
  </nav>
);

export default NavBar;
