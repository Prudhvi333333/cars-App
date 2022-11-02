import "./single.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Widgets from "../../components/widgets/Widgets";
import {
  CalendarToday,
  LocationSearching,
  MailOutline,
  PermIdentity,
  PhoneAndroid,
  PendingOutlinedIcon,
  Publish,
} from "@material-ui/icons";

import Login from "../login/Login";

import LocalTaxiIcon from "@mui/icons-material/LocalTaxi";

import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
// import AdminApproval from "./AdminApproval";
import OneWayBookings from "./OneWayBookings";

function displayBlock() {
  const block = document.getElementById("blockdiv");

  if (block.style.display === "none") {
    //console.log("Entered if");
    block.style.display = "block";
  } else if (block.style.display === "block") {
    //console.log("entered else");
    block.style.display = "none";
  } else {
    //console.log("error");
  }
}

const Singlereqcab = ({ selected, setSelected }) => {
  const id = useLocation().pathname.replace("/users/", "");

  const handleApproval = (e) => {
    const select = e.target;
    // //console.log(select.children[select.selectedIndex].id);
    setIsApproved(select.children[select.selectedIndex].id);
    if (select.children[select.selectedIndex].id == "Rejected") {
      //console.log("clicked on rejected");
      const div1 = document.getElementById("div1");
      const div2 = document.getElementById("div2");
      const div3 = document.getElementById("div3");
      const div4 = document.getElementById("div4");
      const div5 = document.getElementById("div5");
      const div6 = document.getElementById("div6");
      const div8 = document.getElementById("div8");

      div1.style.visibility = "hidden";
      div2.style.visibility = "hidden";
      div3.style.visibility = "hidden";
      div4.style.visibility = "hidden";
      div5.style.visibility = "hidden";
      div6.style.visibility = "hidden";
      div8.style.visibility = "hidden";
    } else {
      const div1 = document.getElementById("div1");
      const div2 = document.getElementById("div2");
      const div3 = document.getElementById("div3");
      const div4 = document.getElementById("div4");
      const div5 = document.getElementById("div5");
      const div6 = document.getElementById("div6");
      const div8 = document.getElementById("div8");

      div1.style.visibility = "visible";
      div2.style.visibility = "visible";
      div3.style.visibility = "visible";
      div4.style.visibility = "visible";
      div5.style.visibility = "visible";
      div6.style.visibility = "visible";
      div8.style.visibility = "visible";
    }
  };
  const [expectedTime, setExpectedTime] = useState({ hours: 0, minutes: 0 });
  const [currentData, setCurrentData] = useState([]);
  const [cabs, setCabs] = useState([]);
  const [drivers, setDrivers] = useState([]);
  const [cabSelected, setCabSelected] = useState({});
  const [currentUser, setCurrentUser] = useState([]);
  const [driverSelected, setDriverSelected] = useState({});
  const [isApproved, setIsApproved] = useState("Pending");

  useEffect(() => {
    getCurrentData();
  }, []);

  useEffect(() => {
    getCabsData();
    getUserData();
    getDriversData();
  }, [currentData]);

  const hours = [];
  for (let i = 0; i <= 12; i++) {
    hours.push(i);
  }
  const minutes = [];
  for (let i = 0; i <= 60; i++) {
    minutes.push(i);
  }

  const add2TimeObjects = (isSingleTrip) => {
    const x = expectedTime;
    const y = currentData["endTime"];
    if (!isSingleTrip) {
      var totalMinutes =
        (x.hours * 1 + 2 * y.hours * 1) * 60 +
        (x.minutes * 1 + 2 * y.minutes * 1);
    } else {
      var totalMinutes =
        (x.hours * 1 + y.hours * 1) * 60 + (x.minutes * 1 + y.minutes * 1);
    }
    //console.log(totalMinutes);
    const toMilliseconds = (hrs, min, sec) =>
      (hrs * 60 * 60 + min * 60 + sec) * 1000;
    // //console.log(currentData.DATE);
    var currDT = Date.parse(currentData.Booking_Date);
    currDT += toMilliseconds(0, totalMinutes, 0);
    var date = new Date(currDT);
    //console.log(date.toLocaleDateString() + " " + date.toLocaleTimeString());
    return date.toLocaleDateString() + " " + date.toLocaleTimeString();
    // return totalMinutes;
  };
  const formSubmitEvent = (e) => {
    e.preventDefault();
    if (isApproved == "Approved") {
      updateCabStatus(cabSelected.id);
      updateDriverStatus(driverSelected.id);
      updateApproveStatus();
      addConfirmation();
    } else {
      //console.log(add2TimeObjects());
      alert("Please select status!");
    }
  };

  //POST REQUESTS

  const addConfirmation = async () => {
    const res = await axios.post(
      "https://carbooking-3603a-default-rtdb.firebaseio.com/bookings.json",
      {
        vehicleNumber: cabSelected.VEHICLE_NUMBER,
        company: cabSelected.COMPANY,
        driverName: driverSelected.name,
        number: driverSelected.mobile,
        start: currentData.Booking_Date,
        end: add2TimeObjects(currentData.isSingleTrip),
        isSingleTrip: currentData.isSingleTrip,
        email: currentData.email,
      }
    );

    // console.log(res);
  };

  //GET REQUESTS

  async function getCabsData() {
    console.log(currentData);
    const { data } = await axios.get(
      "https://carbooking-3603a-default-rtdb.firebaseio.com/cabs.json"
    );
    //console.log(data);
    const arr_data = [];
    for (var k in data) {
      arr_data.push({ ...data[k], id: k });
    }

    const fcabs = arr_data.filter((c) => {
      return Date.parse(currentData.Booking_Date) >= Date.parse(c.busyUntil);
    });

    setCabs(fcabs);
    // setCabs(arr_data);
    //console.log(arr_data);
  }

  async function getUserData() {
    const { data } = await axios.get(
      "https://carbooking-3603a-default-rtdb.firebaseio.com/users.json"
    );
    // console.log(data);
    for (var k in data) {
      // console.log(data[k]);
      if (data[k].Mail === currentData.bookedFrom) {
        setCurrentUser(data[k]);
      }
    }
  }
  async function getCurrentData() {
    const { data } = await axios.get(
      "https://carbooking-3603a-default-rtdb.firebaseio.com/staffinput/" +
        id +
        ".json"
    );
    setCurrentData(data);
  }

  async function getDriversData() {
    const { data } = await axios.get(
      "https://carbooking-3603a-default-rtdb.firebaseio.com/drivers.json"
    );
    const arr_data = [];
    for (var k in data) {
      if (Date.now() >= Date.parse(data[k].busyUntil)) {
        arr_data.push({ ...data[k], id: k });
      }
    }
    setDrivers(arr_data);
    //console.log(arr_data);
  }

  //PATCH REQUESTS

  const updateCabStatus = async (id) => {
    const res = axios.patch(
      "https://carbooking-3603a-default-rtdb.firebaseio.com/cabs/" +
        id +
        ".json",
      { busyUntil: add2TimeObjects(currentData.isSingleTrip) }
    );
  };
  const updateDriverStatus = async (id) => {
    const res = axios.patch(
      "https://carbooking-3603a-default-rtdb.firebaseio.com/drivers/" +
        id +
        ".json",
      { busyUntil: add2TimeObjects(currentData.isSingleTrip) }
    );
  };

  async function updateApproveStatus() {
    const { data } = await axios.patch(
      "https://carbooking-3603a-default-rtdb.firebaseio.com/staffinput/" +
        id +
        ".json",
      { Status: isApproved }
    );
  }

  //PUT REUESTS
  const updateToDB = async () => {
    const res = await axios.put(
      "https://carbooking-3603a-default-rtdb.firebaseio.com/staffinput/" +
        id +
        ".json",
      currentData
    );
    //console.log(res);
  };

  const handleCabChange = (e) => {
    const select = e.target;
    //console.log(select.children[select.selectedIndex]);
    const id = select.children[select.selectedIndex].id;
    //console.log(cabs[id]);
    setCabSelected(cabs[id]);
  };
  const handleDriverChange = (e) => {
    const select = e.target;
    //console.log(select.children[select.selectedIndex]);
    const id = select.children[select.selectedIndex].id;
    //console.log(drivers[id]);
    //console.log(id);
    setDriverSelected({ ...drivers[id] });
  };

  const handleChange = (e) => {
    // const newStuff = {}
    // setData({ ...currentData, [e.target.id]: e.target.value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    updateToDB();
  };

  // const updateCabDetails = () => {
  //   const fcabs = cabs.filter((c) => {
  //     return Date.parse(currentData.Booking_Date) >= Date.parse(c.busyUntil);
  //   });

  //   setCabs(fcabs);
  // };

  // const [isActive, setIsActive] = useState(false)
  // const options = [' PENDING', ' APPROVED', ' REJECTED']
  return (
    <div>
      <div className="single">
        <div className="si">
          <Sidebar />
        </div>
        <div className="singleContainer">
          <Navbar />
          {/* <div className="widgets">
            <Widgets type="cra" />
            <Widgets type="crp" />
            <Widgets type="crr" />
          </div> */}

          {currentData !== [] &&
            cabs !== [] &&
            drivers !== [] &&
            currentUser !== [] && (
              <div className="top">
                <div className="userTitleContainer">
                  <h1 className="userTitle">Approval Details</h1>
                </div>

                <div className="uc">
                  <div className="us">
                    <div className="ust">
                      <img
                        src="https://media.istockphoto.com/vectors/user/.-icon-people-icon-isolated-on-white-background-vector-vector-id1210939712?k=20&m=1210939712&s=612x612&w=0&h=xJqEPQnMiNofprbLXWdEtJQ75QL79lQ5N76J4JOdTIM="
                        alt=""
                        className="userShowImg"
                      />
                      <div className="ustt">
                        <span className="userShowUsername">
                          {currentUser.Name}
                        </span>
                        <span className="userShowUserTitle">
                          {currentUser.employee_id}
                        </span>
                      </div>
                    </div>

                    <div className="userShowBottom">
                      <div className="flex-box">
                        <div className="DetailsOfTheRequester">
                          <span className="userShowTitle">
                            Details of the Traveller(self)
                          </span>
                          <div className="userShowInfo">
                            <PermIdentity className="userShowIcon" />
                            <span className="userShowInfoTitle">
                              {currentUser.Name}
                            </span>
                          </div>
                          <div className="userShowInfo">
                            <CalendarToday className="userShowIcon" />
                            <span className="userShowInfoTitle">
                              {currentData.Booking_Date}
                            </span>
                          </div>
                          <span className="userShowTitle">Contact Details</span>
                          <div className="userShowInfo">
                            <PhoneAndroid className="userShowIcon" />
                            <span className="userShowInfoTitle">
                              {currentUser.mobile}
                            </span>
                          </div>
                          <div className="userShowInfo">
                            <MailOutline className="userShowIcon" />
                            <span className="userShowInfoTitle">
                              {currentUser.Mail}
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="tripDetails">
                        <span className="userShowTitle">Trip Details</span>
                        <div className="userShowInfo">
                          <label>From : </label>
                          <LocationSearching className="userShowIcon" />
                          <span className="userShowInfoTitle">
                            {currentData.To}
                          </span>
                        </div>
                        <div className="userShowInfo">
                          <label>To : </label>
                          <LocationSearching className="userShowIcon" />
                          <span className="userShowInfoTitle">
                            {currentData.From}
                          </span>
                        </div>
                        <div className="userShowInfo">
                          <label>Status : </label>
                          <span className="userShowInfoTitle">Pending</span>
                        </div>
                      </div>

                      {/* <div className="flex-box">
                    <div className="DetailsOfCab">
                      <span className="userShowTitle">Details of the cab</span>
                      <div className="userShowInfo">
                        <label>Cab Name: </label>
                        <span className="userShowInfoTitle">Pending</span>
                      </div>
                      <div className="userShowInfo">
                        <label>Cab Number: </label>
                        <span className="userShowInfoTitle">Pending</span>
                      </div>
                      <div className="userShowInfo">
                        <label>Cab Type and Company: </label>
                        <span className="userShowInfoTitle">Pending</span>
                      </div>
                    </div>
                  </div> */}

                      <div className="flex-box">
                        {/* <div className="onBehalf">
                          <span className="userShowTitle">On Behalf</span>
                          <div className="userShowInfo">
                            <label> Name: </label>
                            <span className="userShowInfoTitle">
                              {currentData.name}
                            </span>
                          </div>
                          <div className="userShowInfo">
                            <label>Mobile: </label>
                            <span className="userShowInfoTitle">
                              {currentData.mobile}
                            </span>
                          </div>
                          <div className="userShowInfo">
                            <label>Email: </label>
                            <span className="userShowInfoTitle">
                              {currentData.email}
                            </span>
                          </div>
                        </div> */}

                        <div className="Round-Trip">
                          <span className="userShowTitle">Round Trip</span>
                          <div className="userShowInfo">
                            <label> Destinathon: </label>
                            <span className="userShowInfoTitle">
                              to vijayawada
                            </span>
                          </div>
                          <div className="userShowInfo">
                            <label>Date: </label>
                            <span className="userShowInfoTitle">
                              24-04-2022
                            </span>
                          </div>
                          <div className="userShowInfo">
                            <label>Time: </label>
                            <span className="userShowInfoTitle">4:00 PM</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    {cabs !== [] &&
                      drivers !== [] &&
                      currentData.Status !== "Approved" && (
                        <div className="uup">
                          {/* {updateCabDetails()} */}
                          <form className="userUpdateForm">
                            <div className="userUpdateLeft">
                              <div className="userUpdateTitle1">
                                Admin Approval
                              </div>

                              <div className="dropdown">
                                <div id="ststusDiv" onClick={displayBlock}>
                                  <label id="status">Status :</label>
                                  {/* <p id="statusP">Select the status</p> */}
                                </div>
                                <div id="ddStatus">
                                  <select onChange={handleApproval}>
                                    <option id="Pending"> Pending</option>
                                    <option id="Approved">approved</option>
                                    <option id="Rejected">Rejected</option>
                                  </select>
                                </div>
                              </div>
                              <div className="ch" id="div1">
                                <div className="subch">
                                  <input
                                    type="radio"
                                    name="info"
                                    id="single"
                                    checked={currentData.isSingleTrip}
                                  />
                                  <label> single trip</label>
                                </div>
                                <div className="subch">
                                  <input
                                    type="radio"
                                    name="info"
                                    id="round"
                                    checked={!currentData.isSingleTrip}
                                  />
                                  <label>Round Trip</label>
                                </div>
                              </div>
                              <div className="userUpdateItem" id="div2">
                                <label>Cab Number</label>
                                <select onChange={handleCabChange}>
                                  {cabs.map((cab, idx) => {
                                    return (
                                      <option key={idx} id={idx}>
                                        {cab["VEHICLE_NUMBER"]}
                                      </option>
                                    );
                                  })}
                                </select>
                              </div>
                              <div className="userUpdateItem" id="div3">
                                <label>COMPANY</label>
                                <select disabled>
                                  {cabSelected === {} ? (
                                    cabs.map((cab, idx) => {
                                      return (
                                        <option key={idx} id={idx}>
                                          {cab["COMPANY"]}
                                        </option>
                                      );
                                    })
                                  ) : (
                                    <option>{cabSelected["COMPANY"]}</option>
                                  )}
                                </select>
                              </div>
                              <div className="userUpdateItem" id="div4">
                                <label>Driver Name</label>
                                <select onChange={handleDriverChange}>
                                  {drivers.map((cab, idx) => {
                                    return (
                                      <option key={idx} id={idx}>
                                        {cab["name"]}
                                      </option>
                                    );
                                  })}
                                </select>
                              </div>
                              <div className="userUpdateItem" id="div5">
                                <label>Mobile: </label>
                                <input
                                  type="text"
                                  placeholder="+91 73883764332"
                                  className="userUpdateInput"
                                  disabled
                                  value={
                                    driverSelected !== {}
                                      ? driverSelected["mobile"]
                                      : "+91 73883764332"
                                  }
                                />
                              </div>
                              <div className="userUpdateItem" id="div6">
                                <label>Emergency Mobile: </label>
                                <input
                                  type="text"
                                  placeholder="+91 73883764332"
                                  className="userUpdateInput"
                                  disabled
                                  value={
                                    driverSelected !== {}
                                      ? driverSelected["emergencymobile"]
                                      : "+91 73883764332"
                                  }
                                />
                              </div>
                              <div className="userUpdateItem" id="div7">
                                <label>Remarks if Rejected</label>
                                <input
                                  type="text"
                                  placeholder="Not available"
                                  className="userUpdateInput"
                                />
                              </div>

                              {/* <span className="userShowTitle">Cabs to check</span>
              <div className="userUpdateItem">
                <label>Click to see Booked cabs for Today : </label>
                <a href="">Cabs with detials</a>
              </div> */}
                              <div className="userUpdateItem" id="div8">
                                Enter the time unavailable for cab and driver to
                                return
                                <div className="blockingUserUpdateItem">
                                  <select
                                    name="time"
                                    id="time"
                                    onChange={(e) => {
                                      setExpectedTime({
                                        ...expectedTime,
                                        hours: e.target.value,
                                      });
                                    }}
                                  >
                                    {hours.map((i) => {
                                      return <option value={i}>{i}</option>;
                                    })}
                                  </select>
                                  <select
                                    name="time"
                                    id="time"
                                    onChange={(e) => {
                                      setExpectedTime({
                                        ...expectedTime,
                                        minutes: e.target.value,
                                      });
                                    }}
                                  >
                                    {minutes.map((i) => {
                                      return <option value={i}>{i}</option>;
                                    })}
                                  </select>
                                </div>
                              </div>
                              <div className="userUpdateRight">
                                <button
                                  className="userUpdateButton"
                                  onClick={formSubmitEvent}
                                >
                                  Update
                                </button>
                              </div>
                            </div>
                          </form>
                          <div className="aaright">
                            <div className="aatable">
                              {" "}
                              <OneWayBookings />
                            </div>
                            <form className="userUpdateForm1">
                              <div className="userUpdateLeft1">
                                <div className="userUpdateTitle">
                                  Admin Approval for One Way
                                </div>
                                <div className="subUserUpdateTitle">
                                  <div className="userUpdateItem">
                                    <label>Cab Number</label>
                                    <select onChange={handleCabChange}>
                                      {cabs.map((cab, idx) => {
                                        return (
                                          <option key={idx} id={idx}>
                                            {cab["VEHICLE_NUMBER"]}
                                          </option>
                                        );
                                      })}
                                    </select>
                                  </div>
                                  <div className="userUpdateItem">
                                    <label>COMPANY</label>
                                    <select disabled>
                                      {cabSelected === {} ? (
                                        cabs.map((cab, idx) => {
                                          return (
                                            <option key={idx} id={idx}>
                                              {cab["COMPANY"]}
                                            </option>
                                          );
                                        })
                                      ) : (
                                        <option>
                                          {cabSelected["COMPANY"]}
                                        </option>
                                      )}
                                    </select>
                                  </div>
                                  <div className="userUpdateItem">
                                    <label>Driver Name</label>
                                    <select onChange={handleDriverChange}>
                                      {drivers.map((cab, idx) => {
                                        return (
                                          <option key={idx} id={idx}>
                                            {cab["name"]}
                                          </option>
                                        );
                                      })}
                                    </select>
                                  </div>
                                  <div className="userUpdateItem">
                                    <label>Mobile: </label>
                                    <input
                                      type="text"
                                      placeholder="+91 73883764332"
                                      className="userUpdateInput"
                                      disabled
                                      value={
                                        driverSelected !== {}
                                          ? driverSelected["mobile"]
                                          : "+91 73883764332"
                                      }
                                    />
                                  </div>
                                </div>
                                <div className="subUserUpdateTitle">
                                  <div className="userUpdateItem">
                                    <label>Emergency Mobile: </label>
                                    <input
                                      type="text"
                                      placeholder="+91 73883764332"
                                      className="userUpdateInput"
                                      disabled
                                      value={
                                        driverSelected !== {}
                                          ? driverSelected["emergencymobile"]
                                          : "+91 73883764332"
                                      }
                                    />
                                  </div>
                                  <div className="userUpdateItem">
                                    <label>Remarks if Rejected</label>
                                    <input
                                      type="text"
                                      placeholder="Not available"
                                      className="userUpdateInput"
                                    />
                                  </div>

                                  <div className="userUpdateItem">
                                    Enter the time unavailable for cab and
                                    driver to return
                                    <div>
                                      <select
                                        name="time"
                                        className="blockingUserUpdateItem"
                                        id="time"
                                        onChange={(e) => {
                                          setExpectedTime({
                                            ...expectedTime,
                                            hours: e.target.value,
                                          });
                                        }}
                                      >
                                        {hours.map((i) => {
                                          return <option value={i}>{i}</option>;
                                        })}
                                      </select>
                                      <select
                                        name="time"
                                        id="time"
                                        onChange={(e) => {
                                          setExpectedTime({
                                            ...expectedTime,
                                            minutes: e.target.value,
                                          });
                                        }}
                                      >
                                        {minutes.map((i) => {
                                          return <option value={i}>{i}</option>;
                                        })}
                                      </select>
                                    </div>
                                  </div>

                                  <div className="userUpdateRight">
                                    <button
                                      className="userUpdateButton"
                                      onClick={formSubmitEvent}
                                    >
                                      Update
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </form>
                          </div>
                        </div>
                      )}
                  </div>
                </div>
              </div>
            )}
        </div>
      </div>
      {/* <Login/> */}
    </div>
  );
};

export default Singlereqcab;
