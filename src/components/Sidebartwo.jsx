import React from "react";
import Navbar from "./Navbar"
import Search from "./Search"
import Chats from "./Chats"
import Searchtwo from "./Searchtwo";


const Sidebartwo = () => {
  return (
    <div className="sidebar">
      <Navbar />
      <Searchtwo/>
      <Chats/>
    </div>
  );
};

export default Sidebartwo;
