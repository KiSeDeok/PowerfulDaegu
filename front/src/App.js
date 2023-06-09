import {BrowserRouter, Route, Routes} from "react-router-dom";
import {createContext} from "react";
import {CookiesProvider, useCookies} from 'react-cookie';

import Main from "./component/Main/Main"
import Map from "./component/map/Map";
import Login from "./component/Login/Login"
import SignUp from "./component/SignUp/SignUP";
import Community from "./component/Community/Community";

export const AppContext = createContext();

function App() {
    const serverUrl = "http://localhost:3001/"

    return (
        <CookiesProvider>
            <AppContext.Provider value={{serverUrl}}>
                <BrowserRouter>
                    <Routes>
                        <Route path="/home" element={<Main/>}/>
                        <Route path="/login" element={<Login/>}/>
                        <Route path="/signup" element={<SignUp/>}/>
                        <Route path="/community/*" element={<Community/>}/>
                        <Route path="/map" element={<Map/>}/>
                    </Routes>
                </BrowserRouter>
            </AppContext.Provider>
        </CookiesProvider>
    );
}

export default App;
