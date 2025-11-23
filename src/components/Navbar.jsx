import React from "react";
import dayjs from "dayjs";
import { navLinks } from "../constants";
import { navIcons } from "../constants";
const Navbar = () => {
  return (
    <nav>
      <div className="">
        <img src="./public/images/logo.svg" alt="logo" />
        <p className="font-bold">Dinesh Babu's Portfolio</p>
        <ul>
          {navLinks.map(({ id, name }) => (
            <li key={id}>
              <p>{name}</p>
            </li>
          ))}
        </ul>
      </div>
      <div className="">
        <ul>
          {navIcons.map(({ id, img }) => (
            <li key={id} className="icon-hover">
              <img src={img} alt={` icon - ${id} `} />
            </li>
          ))}
        </ul>
        <time>{dayjs().format("ddd MMM D h:mm A")}</time>
      </div>
    </nav>
  );
};

export default Navbar;
