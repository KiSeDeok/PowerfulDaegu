import { Routes, Route, BrowserRouter } from "react-router-dom";

import Main from "./component/Main/Main"
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {CookiesProvider, useCookies} from 'react-cookie';
import Map from "./component/map/Map";
import Login from "./component/Login/Login"
import SignUp from "./component/SignUp/SignUP";
import Community from "./component/Community/Community";

import { CookiesProvider } from 'react-cookie';

function App() {
  return (
      <CookiesProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/home" element={<Main/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/signup" element={<SignUp/>}/>
            <Route path="/community/*" element={<Community/>}/>
            <Route path="/map" element={<Map/>}/>
          </Routes>
        </BrowserRouter>
      </CookiesProvider>
  );
}

export default App;
