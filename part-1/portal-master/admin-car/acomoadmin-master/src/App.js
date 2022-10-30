import Home from "./pages/home/Home"
import Login from "./pages/login/Login"
import List from "./pages/list/List"
import Single from "./pages/single/Single"
import Singlereqcab from "./pages/single/Singlereqcab"
import Editcab from "./pages/edit/Editcab"
import Editdriver from "./pages/edit/Editdriver"
import Auib from "./components/sidebar/Auib"
import Settings from './components/sidebar/Settings'
import Edituser from './pages/edit/Edituser'
import New_user from "./pages/new/New_user"
import Singledriver from "./pages/new/single_driver"
import Single_cab from "./pages/new/Single_cab"
import New from "./pages/new/New"
import Profile from "./components/sidebar/Profile"
// import Acommo from "./components/acommo/Acommo"
import Vehicle from "./components/vehicle/Vehicle"
import { useState } from "react"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
  Routes
} from "react-router-dom";
import { productInputs, userInputs, cabdriver, User } from "./forminputs"


function App() {

  const [selected, setSelected] = useState("")
  return (
    <div className="App">

      <Router>
        <Routes>
          <Route path="/">
            <Route index element={<Login />} />
            <Route path="/settings" element={<Settings />} />
            <Route path='/aubi' element={<Auib />} />
            {/* /profile */}
            <Route path="/profile" element={<Profile />} />
            <Route path="home" element={<Home />} />

            <Route path="users">
              <Route index element={<Home />} />
              <Route path=":userId" element={<Singlereqcab />} />
              <Route path="new" element={<New inputs={userInputs} title="ADD NEW USER" />} />
            </Route>
            <Route path="drivers">
              <Route index element={<Home />} />
              <Route path=":driverId" element={<Editdriver />} />
              <Route path="new" element={<New inputs={userInputs} title="ADD NEW USER" />} />
            </Route>
            <Route path="cabs">
              <Route index element={<Home />} />
              <Route path=":cabId" element={<Editcab />} />
              <Route path="new" element={<New inputs={userInputs} title="ADD NEW USER" />} />
            </Route>
            <Route path="services">
              <Route path="vehicle">
                <Route index element={<Vehicle />} />
                <Route path="vehicles">
                  <Route path="settinguserid/:id" element={<Edituser selected={selected} setSelected={setSelected} />} />
                  <Route path="new" element={<Single_cab inputs={productInputs} title="ADD NEW CAB" />} />
                  <Route path="driver" element={<Singledriver inputs={cabdriver} title="ADD NEW DRIVER" />} />
                  <Route path="userid" element={<New_user inputs={User} title="ADD NEW USER" />} />
                </Route>
              </Route>

            </Route>
          </Route>
        </Routes>
      </Router>

    </div>
  );
}

export default App;
