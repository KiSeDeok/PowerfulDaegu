import { Routes, Route, BrowserRouter } from "react-router-dom";

import Main from "./component/Main/Main"
import Login from "./component/Login/Login"
import SignUp from "./component/SignUp/SignUP";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/home" element={<Main/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/signup" element={<SignUp/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
