import React from "react";

const Menu = props => {
  return (
    <div className="menu">
      <ul>
        <li className="menu-item" onClick={props.onClick}>
          Create A New Chat
        </li>
      </ul>
    </div>
  );
};

export default Menu;
