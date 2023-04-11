import Main from "./component/Main/Main"
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {CookiesProvider, useCookies} from 'react-cookie';
import MainMap from "./component/map/MainMap";



function App() {
  return (

      // <Main/>

  <CookiesProvider>

          <div className="App">
            <Router>
              <Routes>
                <Route path="/" element={<Main/>}/>
                <Route path="/map" element={<MainMap/>}/>
              </Routes>
            </Router>
          </div>
      </CookiesProvider>

  );
}

export default App;
