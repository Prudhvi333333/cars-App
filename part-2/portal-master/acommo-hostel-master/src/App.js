import './App.css';
import Login from './pages/car/login.jsx'
import React,{useEffect} from "react";
import Staffallot from './pages/Staffallot';
import Car from './pages/car/Car.jsx'
import Table from './pages/car/Table.js'
import Profile from './pages/car/Profile.js'
import ProfileEdit from './pages/car/ProfileEdit.js'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
  Routes
} from "react-router-dom";
import { auth } from './pages/car/fireBaseConfig';



function App() {


  function getData(){
      var box = document.getElementById('behalf')
      var div = document.getElementById('block')
      if(box.checked === true){
        div.style.display = "block"
      }
      else{
      div.style.display = "none"
      }
  }
  return (
    <>
    
    {/* <Staffallot data = {getData}/> */}
    {/* <Car data={getData}/> */}
    <Router>
        <Routes>
          <Route path="/">
            <Route index element={<Login/>}/>
            <Route path="/car"  element={<Car/>}>
            </Route>
            <Route path="/Tabel" element={<Table/>}/>
            <Route path="/profile" element={<Profile/>}/>
            <Route path="/ProfileEdit" element={<ProfileEdit/>}/>
          </Route>
        </Routes>
    </Router>
    </>
  );
}

export default App;
