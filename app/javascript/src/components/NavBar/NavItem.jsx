import React from "react";

import { Link } from "react-router-dom";

const NavItem = ({ iconClass, name, path }) => (
  <Link
    to={path}
    className="mr-3 inline-flex items-center px-1 pt-1
      text-sm font-semibold leading-5
      text-gray-700 hover:text-orange-500"
  >
    {iconClass && <i className={`${iconClass} text-bb-orange`}></i>}
    {name}
  </Link>
);

export default NavItem;
