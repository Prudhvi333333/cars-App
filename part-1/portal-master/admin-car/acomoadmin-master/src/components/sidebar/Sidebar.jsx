
import "./sidebar.scss";
import DashboardCustomizeIcon from "@mui/icons-material/DashboardCustomize";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import BedIcon from "@mui/icons-material/Bed";
import CarRentalIcon from "@mui/icons-material/CarRental";
import LocalParkingIcon from "@mui/icons-material/LocalParking";
import NotificationsIcon from "@mui/icons-material/Notifications";
import LogoutIcon from "@mui/icons-material/Logout";
import PsychologyIcon from "@mui/icons-material/Psychology";
import SettingsIcon from "@mui/icons-material/Settings";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import { Link } from "react-router-dom";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendSignInLinkToEmail,
  isSignInWithEmailLink,
  sendPasswordResetEmail,
  signOut,
} from "firebase/auth";
import { useState, useEffect, useRef } from "react";

const Sidebar = () => {
  function myFunction(){
    var down = document.getElementById("myDropdown");
    down.style.display = ((down.style.display!='block') ? 'block' : 'none')
  }

  const [open, setOpen] = useState(false);

  let menuRef = useRef();

  useEffect(() => {
    let handler = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  function redirectSettings() {
    window.location.href = "/settings";
  }

  function logout() {
    let auth = getAuth();
    auth
      .signOut()
      .then(() => {
        alert("signed out successful");
      })
      .catch((err) => {
        //console.log(err.message)
        //console.log('sign out  failed!!')
      });
    window.location.href = "/";
  }

  function Profile() {
    //console.log("clicked")
    window.location.href = "/profile";
  }

  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">Admin</span>
        </Link>
      </div>
      <hr className="hello" />
      <div className="centre">
        <ul>
          <p className="title">MAIN</p>
          <Link to="/home" style={{ textDecoration: "none" }}>
            <li>
              <DashboardCustomizeIcon className="icon" />
              <span>Dashboard</span>
            </li>
          </Link>
          <p className="title">SERVICES</p>
          {/* <Link to="/users" style={{ textDecoration: "none" }}>
            <li>
              <PersonOutlineOutlinedIcon className="icon" />
              <span>Users</span>
            </li>
          </Link> */}
          {/* <Link to="/services/acommodation" style={{textDecoration:"none"}}>
            <li>
                <BedIcon className='icon'/>
                <span>Accomodation</span>
            </li>
            </Link> */}
          {/* <Link to="/services/vehicle" style={{textDecoration:"none"}}> */}
          <li onClick={myFunction} id='some'>
            <div className="menu-container" ref={menuRef}>
              <div
                className="menu-trigger"
                onClick={() => {
                  setOpen(!open);
                }}>
                <CarRentalIcon className="icon" />
                <span >
                  <div id="dropdown">
                    <button class="dropbtn">
                      Fleet Management
                    </button>
                  </div>
                </span>
              </div>
            </div>
          </li>
          <span>
            <li>
              <div id="myDropdown" class="dropdown-content" >
                <a href="/services/vehicle">Car</a>
                <a href="">Bus</a>
              </div>
            </li>
          </span>
          {/* </Link> */}
          {/* <li>
                <LocalParkingIcon className='icon'/>
                <span>Vehicle Insurance</span>
            </li> */}
          <p className="title">USEFUL</p>
          <li>
            <NotificationsIcon className="icon" />
            <span>Notifications</span>
          </li>
          <li>
            <PsychologyIcon className="icon" />
            <span>Logs</span>
          </li>
          <li onClick={redirectSettings}>
          <PersonOutlineOutlinedIcon className="icon" />
            <span >User</span>
          </li>
          <p className="title">USER</p>
          {/* <li>
            <AccountBoxIcon className="icon" />
            <span onClick={Profile}>Profile</span>
          </li> */}
          <li>
            <LogoutIcon className="icon" />
            <span id="logout" onClick={logout}>
              Logout
            </span>
          </li>
        </ul>
      </div>
      {/* <div className="bottom">
        <span>Bottom</span>
      </div> */}
    </div>
  );
};

export default Sidebar;
