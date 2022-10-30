import "./Car.css";
import React, { useState, useEffect } from "react";
import Navbar from "../../components/Navbar";
import car from "./car.png";
import { app } from "./fireBaseConfig";
import axios from "axios";
import { Table } from "antd";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import UserBookings from "../../components/UserBookings";
// import Map from "./Map";

function Car1(props) {
  function calculateTimeReq(kms, currTime, isRoundTrip) {
    const toMilliseconds = (hrs, min, sec) =>
      (hrs * 60 * 60 + min * 60 + sec) * 1000;
    var currDT = Date.parse(currTime);
    var totalTime = 60;
    if (isRoundTrip) {
      totalTime += 3 * (kms * 2);
    } else {
      totalTime += 3 * kms;
    }
    currDT += toMilliseconds(0, totalTime, 0);
    var date = new Date(currDT);
    return date.toLocaleDateString() + " " + date.toLocaleTimeString();
  }

  const hours = [];
  for (let i = 0; i <= 12; i++) {
    hours.push(i);
  }
  const minutes = [];
  for (let i = 0; i <= 60; i++) {
    minutes.push(i);
  }

  const [expectedTime, setExpectedTime] = useState({ hours: 0, minutes: 0 });

  const [user, setUser] = useState({});
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    onAuthStateChanged(getAuth(), (user) => {
      if (user) {
        setUser(user);
        // console.log(user);
      }
    });
    // getDataFromDB();
  }, []);

  function returnj() {
    const returnDiv = document.getElementById("returnBlock");
    if (returnDiv.style.display === "none") returnDiv.style.display = "block";
    else returnDiv.style.display = "none";
  }

  function getData() {
    var box = document.getElementById("behalf");
    var div = document.getElementById("carBlock");
    if (box.checked === true) {
      div.style.display = "block";
    } else {
      div.style.display = "none";
    }
  }

  const changeDate = (dt) => {
    var date = new Date(dt);
    console.log(dt);
    return date.toLocaleDateString() + " " + date.toLocaleTimeString();
  };
  const [data, setData] = useState([]);
  const [isSingleTrip, setSingleTrip] = useState(false);

  const handelInput = (event) => {
    {
      let newInput = { [event.target.name]: event.target.value };
      setData({ ...data, ...newInput });
    }
  };

  const handleSubmit = async (e) => {
    // e.preventDefault();
    console.log(data);
    const res = await axios.post(
      "https://carbooking-3603a-default-rtdb.firebaseio.com/staffinput.json",
      {
        ...data,
        Booking_Date: changeDate(data.Booking_Date),
        DATE: new Date().toLocaleString(),
        Status: "Pending",
        bookedFrom: user.email,
        endTime: expectedTime,
        isSingleTrip,
      }
    );
    console.log(res);
    // setData({})
  };

  function profile() {
    window.location.href = "profile";
  }

  function showCabDetails() {
    alert(JSON.stringify(userData[0]));
  }

  function getSelfData() {
    var div = document.getElementById("carBlock");
    div.style.display = "none";
  }

  function getData() {
    var div = document.getElementById("carBlock");
    div.style.display = "block";
  }
  return (
    <div>
      <Navbar />

      <div>
        {/* <Navbar /> */}
        <body>
          <div className="jumbotron">
            <h1>Car Booking</h1>
            <p>
              Filling in the following details to make your booking possible.
            </p>
            <a onClick={profile} id="profile">
              <i className="fa fa-user"></i>
            </a>
            <div className="top">
              <div className="topLeft">
                <img src={car} alt="car-pic" className="carimg" />
              </div>
              <div className="topRight">
                <h1>Booking details</h1>
                <div className="book">
                  <UserBookings user={user} />
                </div>
                <form className="form-horizontal" onSubmit={handleSubmit}>
                  <div className="carCheckbox">
                    <div className="carSubCheck">
                      <input
                        type={"radio"}
                        name="check"
                        onClick={getSelfData}
                      ></input>
                      <label id="self" for="name">
                        Self
                      </label>
                    </div>
                    <div className="carSubCheck">
                      <input
                        id="behalf"
                        name="check"
                        type={"radio"}
                        onClick={getData}
                      ></input>
                      <label for="name">On Behalf</label>
                    </div>
                  </div>

                  <div className="carFormat">
                    <div id="carBlock">
                      <div id="carFlex">
                        <div className="carLables">
                          <label id="name" for="name">
                            {" "}
                            Name{" "}
                          </label>
                          <input
                            onChange={(event) => handelInput(event)}
                            name="name"
                            type={"text"}
                          ></input>
                        </div>
                        <div className="carLables">
                          <label id="mobile" for="name">
                            {" "}
                            Mobile{" "}
                          </label>
                          <input
                            onChange={(event) => handelInput(event)}
                            name="mobile"
                            type={"text"}
                          ></input>
                        </div>

                        <div className="carLables">
                          <label id="email" for="name">
                            {" "}
                            Email{" "}
                          </label>
                          <input
                            onChange={(event) => handelInput(event)}
                            name="email"
                            type={"text"}
                          ></input>
                        </div>
                      </div>
                    </div>

                    <div className="carLables">
                      <label id="reason" for="name">
                        {" "}
                        Reason{" "}
                      </label>
                      <input
                        onChange={(event) => handelInput(event)}
                        name="reason"
                        type={"text"}
                      ></input>
                    </div>

                    <div className="carLables">
                      <label id="remarks" for="name">
                        Remarks
                      </label>
                      <input
                        onChange={(event) => handelInput(event)}
                        name="remarks"
                        type={"text"}
                      ></input>
                    </div>
                  </div>

                  <div className="form-group">
                    <div className="formDivLeft">
                      <div className="input-field">
                        <i
                          className="fa fa-dot-circle-o fa-lg"
                          aria-hidden="true"
                        ></i>
                        <input
                          type="text"
                          onChange={(event) => handelInput(event)}
                          id="from"
                          placeholder="Origin"
                          name="From"
                          required
                        />
                      </div>
                      <div className="input-field">
                        <i
                          className="fa fa-map-marker fa-lg"
                          aria-hidden="true"
                        ></i>
                        <input
                          type="text"
                          id="to"
                          onChange={(event) => handelInput(event)}
                          placeholder="Destination"
                          name="To"
                          required
                        />
                      </div>

                      <div>
                        <label id='est'>Estimated time</label>
                      <div className="tripdiv">
                        <label>hours</label>
                        <select
                          name="cars"
                          id="cars"
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
                        <label>minutes</label>
                        <select
                          name="cars"
                          id="cars"
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
                      {/* <div class="input-field">
                        <i class="fa fa-clock-o fa-lg" aria-hidden="true"></i>
                        <input
                          type="time"
                          id="to"
                          onChange={(event) => handelInput(event)}
                          placeholder="start Time"
                          name="Time"
                          required
                        />
                      </div> */}
                      <div id="returnBlock">
                        <h1>Return Journey</h1>
                        <div class="input-field">
                          <i class="fa fa-clock-o fa-lg" aria-hidden="true"></i>
                          <input
                            type="time"
                            id="to"
                            onChange={(event) => handelInput(event)}
                            placeholder="start Time"
                            name="startTime"
                            required
                          />
                        </div>
                        <div className="input-field">
                          <i
                            className="fa fa-map-marker fa-lg"
                            aria-hidden="true"
                          ></i>
                          <input
                            type="text"
                            id="to"
                            onChange={(event) => handelInput(event)}
                            placeholder="Destination"
                            name="destination"
                            required
                          />
                        </div>
                        <div className="date2">
                          <i className="fa fa-calendar" aria-hidden="true"></i>
                          <input
                            type="text"
                            onChange={(event) => handelInput(event)}
                            placeholder="Date of journey"
                            name="to"
                            onfocus="(this.type='date')"
                            required
                          />
                        </div>

                        
                      </div>
                    </div>
                    <div className="formDivRight">
                      <div className="date">
                        <i className="fa fa-calendar" aria-hidden="true"></i>
                        <input
                          type="datetime-local"
                          onChange={(event) => handelInput(event)}
                          placeholder="date of journey"
                          name="Booking_Date"
                          onfocus="(this.type='date')"
                          required
                        />
                      </div>
                      {/* <div class="input-field">
                        <i class="fa fa-road fa-lg" aria-hidden="true"></i>
                        <input
                          type="text"
                          onChange={(event) => handelInput(event)}
                          id="from"
                          placeholder="Estimated distance"
                          name="EstimatedDistance"
                        />
                      </div> */}
                      {/* <div className="returnDiv">
                        <button id="returnButton" onClick={returnj}>
                          Round Trip
                        </button>
                      </div> */}
                      <div
                        onChange={(e) => {
                          setSingleTrip(e.target.value === "SingleTrip");
                        }}
                        className="single-round"
                      >
                        <input
                          type="radio"
                          id="SingleTrip"
                          name="fav_language"
                          value="SingleTrip"
                          defaultChecked={isSingleTrip}
                        />
                        <label for="SingleTrip">Single Trip</label>
                        <input
                          type="radio"
                          id="RoundTrip"
                          name="fav_language"
                          value="RoundTrip"
                          defaultChecked={!isSingleTrip}
                        />
                        <label for="RoundTrip">Round Trip</label>
                      </div>

                      <div id="butt">
                        <button
                          className="btn btn-info"
                          type="submit"
                          onClick={handleSubmit} id='subButt'>
                          Submit
                        </button>
                      </div>


                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="map">
              {/* <div class="mapouter">
                <div class="gmap_canvas">
                  <iframe class="gmap_iframe"  frameborder="0" scrolling="no" marginHeight="0" marginWidth="0"
                    src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=Vijayawada&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                  ></iframe>
                  <a href="https://mcpenation.com/">Minecraft Website</a>
                </div>
              </div> */}
              {/* <Map/> */}
            </div>
          </div>
        </body>
      </div>
    </div>
  );
}

export default Car1;
