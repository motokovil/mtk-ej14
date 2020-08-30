import React from "react";

export default function Navbar(props) {
  return (
    <div className="navbar shadow">
      <img
        className="logo"
        src="https://i.ibb.co/926GWhJ/SF-02.png"
        alt="logo"
      />
      {props.children}
    </div>
  );
}
