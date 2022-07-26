import React from "react";
import "./navbar.css"
import {AiFillGithub} from "react-icons/ai"

export const Navbar = () => {
  return (
    <>
      <div className="navbarContainer">
        <nav className="navContainer">
          <h1 className="todoTitle">TodoList</h1>
          <a href="https://github.com/Tanjum786" className="githubLink" target= "_blank"><AiFillGithub/></a>
        </nav>
      </div>
    </>
  );
};
