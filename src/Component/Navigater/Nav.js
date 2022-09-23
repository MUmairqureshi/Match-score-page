import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Navigate } from '../header/header'

import {Pakistan} from '../Pakistan/Pakistan'
import {England} from '../England/England'
import {Sumary} from '../Summary/summary'
import {Commentary} from '../Commentary/Commentary'

import {Home} from '../Home/home'
export   function Nav() {
  return (
    <Router>
      <div>
       
         
         <Navigate /> 
         <Home />
          
        <Routes> 
          
          <Route path="/" element={<Sumary />} />
          <Route path="/pakistan" element={<Pakistan />} />
          <Route path="/england" element={<England />} /> 
          <Route path="/commentary" element={<Commentary />} />
 
        </Routes>

 
      </div>
    </Router>
  );
}