import { Publish } from "@material-ui/icons";
import React, { Component, useState, useEffect } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
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

export default function AdminApproval() {
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

  const hours = [];
  for (let i = 0; i <= 12; i++) {
    hours.push(i);
  }
  const minutes = [];
  for (let i = 0; i <= 60; i++) {
    minutes.push(i);
  }
  const [expectedTime, setExpectedTime] = useState({ hours: 0, minutes: 0 });
  const [currentData, setCurrentData] = useState({});
  const [cabs, setCabs] = useState([]);
  const [drivers, setDrivers] = useState([]);
  const [cabSelected, setCabSelected] = useState({});
  const [driverSelected, setDriverSelected] = useState({});
  const [isApproved, setIsApproved] = useState("Pending");

  const add2TimeObjects = () => {
    const x = expectedTime;
    const y = currentData["endTime"];
    const totalMinutes =
      (x.hours * 1 + y.hours * 1) * 60 + (x.minutes * 1 + y.minutes * 1);
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

  const addConfirmation = async () => {
    const res = await axios.post(
      "https://carbooking-3603a-default-rtdb.firebaseio.com/bookings.json",
      {
        vehicleNumber: cabSelected.VEHICLE_NUMBER,
        company: cabSelected.COMPANY,
        driverName: driverSelected.name,
        number: driverSelected.mobile,
        start: currentData.Booking_Date,
        end: add2TimeObjects(),
        isSingleTrip: currentData.isSingleTrip,
      }
    );

    //console.log(res);
  };

  const updateCabStatus = async (id) => {
    const res = axios.patch(
      "https://carbooking-3603a-default-rtdb.firebaseio.com/cabs/" +
        id +
        ".json",
      { busyUntil: add2TimeObjects() }
    );
  };
  const updateDriverStatus = async (id) => {
    const res = axios.patch(
      "https://carbooking-3603a-default-rtdb.firebaseio.com/drivers/" +
        id +
        ".json",
      { busyUntil: add2TimeObjects() }
    );
  };

  async function getCabsData() {
    const { data } = await axios.get(
      "https://carbooking-3603a-default-rtdb.firebaseio.com/cabs.json"
    );
    //console.log(data);
    const arr_data = [];
    for (var k in data) {
      // //console.log(Date
      if (Date.now() >= Date.parse(data[k].busyUntil)) {
        arr_data.push({ ...data[k], id: k });
      }
    }
    setCabs(arr_data);
    //console.log(arr_data);
  }
  async function getCurrentData() {
    const { data } = await axios.get(
      "https://carbooking-3603a-default-rtdb.firebaseio.com/staffinput/" +
        id +
        ".json"
    );
    setCurrentData(data);
  }

  async function updateApproveStatus() {
    const { data } = await axios.patch(
      "https://carbooking-3603a-default-rtdb.firebaseio.com/staffinput/" +
        id +
        ".json",
      { Status: isApproved }
    );
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
  return (
    <div>
      {cabs !== [] && drivers !== [] && currentData.Status !== "Approved" && (
        <div className="uup">
          <form className="userUpdateForm">
            <div className="userUpdateLeft">
              <div className="userUpdateTitle1">Admin Approval</div>

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
                Enter the time unavailable for cab and driver to return
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
                <button className="userUpdateButton" onClick={formSubmitEvent}>
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
                        <option>{cabSelected["COMPANY"]}</option>
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

                  {/* <span className="userShowTitle">Cabs to check</span>
              <div className="userUpdateItem">
                <label>Click to see Booked cabs for Today : </label>
                <a href="">Cabs with detials</a>
              </div> */}
                  <div className="userUpdateItem">
                    Enter the time unavailable for cab and driver to return
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
  );
}
