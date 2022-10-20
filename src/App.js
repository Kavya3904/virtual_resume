import React from "react";
import "./App.css";
import Navlink from "./Nav";
import Footer from "./Footerpart";
import Mainpart from "./Mainpart";
import Mycard from "./Mycard";
import About from "./About";
import Project from "./Project";
import Home from "./Pages/Home";
import {BrowserRouter as Router,Routes,Route ,Navigate} from 'react-router-dom'

import { Register } from "./Pages/Register";
import Login from "./Pages/Login";
import { useContext, useState } from "react";
import { AuthContext } from "./context/AuthContext.js";
import Hometwo from "./Pages/Hometwo";
function App() {
  const {currentUser} = useContext(AuthContext)

const Protectedroute = ({children}) => {
  if (!currentUser) {
    return <Navigate to="/login" />;
  }

  return children;
}

  return (
    <Router>

   
    <div className="app">
      <header>
        <Navlink />
       
      </header>
   
      <Routes>
      <Route  path='/' >
        <Route index element={<Mainpart />}/>
        <Route path='/home'  element={
          <Protectedroute>
        <Home />
        </Protectedroute>
        }/>
          <Route path='/hometwo'  element={
          <Protectedroute>
        <Hometwo />
        </Protectedroute>
        }/>

          <Route path='/mycard' element={<Mycard />}/>
          <Route path='/about' element={<About />}/>
          <Route path='/project' element={<Project />}/>
          <Route path='/register' element={<Register />}/>
          <Route path='/login' element={<Login />}/>
</Route>
        </Routes>
      
      {/* <Footer /> */}
    </div>
    </Router>
  );
}

export default App;
