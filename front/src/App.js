import Main from "./component/Main/Main"
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {CookiesProvider, useCookies} from 'react-cookie';
import Map from "./component/map/Map";

function App() {
  return (
      <CookiesProvider>
          <div className="App">
            <Router>
              <Routes>
                <Route path="/" element={<Main/>}/>
                <Route path="/map" element={<Map/>}/>
              </Routes>
            </Router>
          </div>
      </CookiesProvider>
  );
}

export default App;
