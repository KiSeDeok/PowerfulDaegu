import { Routes, Route, BrowserRouter } from "react-router-dom";

import Main from "./component/Main/Main"
import Login from "./component/Login/Login"
import SignUp from "./component/SignUp/SignUP";
import Notice from "./component/Community/Notice/Notice";
import DetailContent from "./component/Community/Notice/DetailContent";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/home" element={<Main/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/signup" element={<SignUp/>}/>
                <Route path="/notice" exact={true} element={<Notice/>}/>
                <Route path="/notice/:id" element={<DetailContent/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
