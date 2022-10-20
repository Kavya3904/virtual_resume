import React from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";


import profile from "./image/kavweb.png";

export default function Navlink() {
  return (
    <>
        <nav>
        <div>
        {/* <img className="navimg" src={profile} alt="" /> */}
        <h1>KavWeb</h1>
      </div>

      <ul>
        <Coustom to="/">Home</Coustom>
        <Coustom to="/about">My Details</Coustom>
        <Coustom to="/project">Projects</Coustom>
        <Coustom to="/mycard">My Card</Coustom>
      </ul>
    
    </nav>
    <hr></hr>
    </>
  
  );
}
function Coustom({ to, children, ...props }) {
  const paths = useResolvedPath(to);
  const Isactive = useMatch({ path: paths.pathname, end: true });
  return (
    <li className={Isactive ? "active" : ""}>
      <Link to={to} {...props} className="NavLink">
        {children}
      </Link>
    </li>
    
  );
}
// className="NavLink"
