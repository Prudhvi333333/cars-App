import "./Car.css";
import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import car from "./car.png";
import { app } from "./fireBaseConfig";

// import axios from "axios"

export default function Car2() {
  // const[data,setData]=useState({
  //     self:"",
  //     onBehalf:"",
  //     name:"",
  //     mobile:"",
  //     email:"",
  //     reason:"",
  //     remarks:"",
  //     origin:"",
  //     destination:"",
  //     startTime:"",
  //     from:"",
  //     to:"",
  //     EstimatedDistance:"",
  //     submit:""

  // })

  // const {self,reason,onBehalf,name,mobile,email,remarks,origin,destination,startTime,from,to,EstimatedDistance}=data;

  // const changeHandler=e=>{
  //     setData({...data,[e.target.name]:e.target.value});
  // }

  // const submitHandler=e=>{
  //     e.preventDefault()
  //     axios.post("https://accomodation-6b65e-default-rtdb.firebaseio.com/staffinput.json").then(()=>{
  //         alert("Submitted Successfully")
  //     })
  // }

  function getData() {
    var box = document.getElementById("behalf");
    var div = document.getElementById("carBlock");
    if (box.checked === true) {
      div.style.display = "block";
    } else {
      div.style.display = "none";
    }
  }

  const [data, setData] = useState({});

  const handelInput = (event) => {
    {
      let newInput = { [event.target.name]: event.target.value };
      setData({ ...data, ...newInput });
    }
  };

  const handleSubmit = () => {
    //console.log("clicked Submit");
    var name = new String(data.name);
    var mobile = new String(data.mobile);
    var email = new String(data.email);
    var reason = new String(data.reason);
    var remarks = new String(data.remarks);
    var origin = new String(data.origin);
    var destination = new String(data.destination);
    var startTime = new String(data.startTime);
    var from = new String(data.from);
    var to = new String(data.to);
    var EstimatedDistance = new String(data.EstimatedDistance);

    // //console.log(data.name)
    // //console.log(data.mobile)
    // //console.log(data.email)
    // //console.log(data.reason)
    // //console.log(data.remarks)
    // //console.log(data.origin)
    // //console.log(data.destination)
    // //console.log(data.startTime)
    // //console.log(data.from)
    // //console.log(data.to)
    // //console.log(data.EstimatedDistance)
  };

  function profile() {
    window.location.href = "profile";
  }
  return (
    <div>
      <Navbar />
      <body>
        <div className="jumbotron">
          <h1>Car Booking</h1>
          <p>Filling in the following details to make your booking possible.</p>
          <a onClick={profile} id="profile">
            <i className="fa fa-user"></i>
          </a>
          <div className="top">
            <div className="topLeft">
              <img src={car} alt="car-pic" className="carimg" />
            </div>
            <div className="topRight">
              {/* <form className="form-horizontal" onSubmit={submitHandler}> */}
              <form className="form-horizontal">
                <div className="carCheckbox">
                  <div className="carSubCheck">
                    <label id="self" for="name">
                      Self
                    </label>
                    <input type={"checkbox"} name="self"></input>
                  </div>
                  <div className="carSubCheck">
                    <label for="name">On Behalf</label>
                    <input
                      id="behalf"
                      name="onBehalf"
                      type={"checkbox"}
                      onClick={getData}
                    ></input>
                  </div>
                </div>

                <div className="carFormat">
                  <div id="carBlock">
                    <div id="carFlex">
                      <div className="carLables">
                        <label id="name" for="name">
                          Name
                        </label>
                        <input
                          onChange={(event) => handelInput(event)}
                          name="name"
                          type={"text"}
                        ></input>
                      </div>
                      <div className="carLables">
                        <label id="mobile" for="name">
                          Mobile
                        </label>
                        <input
                          onChange={(event) => handelInput(event)}
                          name="mobile"
                          type={"text"}
                        ></input>
                      </div>

                      <div className="carLables">
                        <label id="email" for="name">
                          Email
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
                      Reason
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
                        name="origin"
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
                      />
                    </div>
                    <div class="input-field">
                      <i class="fa fa-clock-o fa-lg" aria-hidden="true"></i>
                      <input
                        type="time"
                        id="to"
                        onChange={(event) => handelInput(event)}
                        placeholder="start Time"
                        name="startTime"
                      />
                    </div>
                  </div>
                  <div className="formDivRight">
                    <div className="date">
                      <i className="fa fa-calendar" aria-hidden="true"></i>
                      <input
                        type="text"
                        onChange={(event) => handelInput(event)}
                        placeholder="from"
                        name="from"
                        onfocus="(this.type='date')"
                        required
                      />
                    </div>
                    <div className="date2">
                      <i className="fa fa-calendar" aria-hidden="true"></i>
                      <input
                        type="text"
                        onChange={(event) => handelInput(event)}
                        placeholder="to"
                        name="to"
                        onfocus="(this.type='date')"
                        required
                      />
                    </div>
                    <div class="input-field">
                      <i class="fa fa-road fa-lg" aria-hidden="true"></i>
                      <input
                        type="text"
                        onChange={(event) => handelInput(event)}
                        id="from"
                        placeholder="Estimated distance"
                        name="EstimatedDistance"
                      />
                    </div>
                  </div>
                </div>
                {/* <img src='https://media.wired.com/photos/59269cd37034dc5f91bec0f1/master/pass/GoogleMapTA.jpg'/> */}
                <input
                  type={"submit"}
                  id="submit"
                  onClick={handleSubmit}
                  placeholder="Submit"
                  name="submit"
                />
              </form>
            </div>
          </div>
          <div className="map">
            <div class="mapouter">
              <div class="gmap_canvas">
                <iframe
                  class="gmap_iframe"
                  width="100%"
                  frameborder="0"
                  scrolling="no"
                  marginheight="0"
                  marginwidth="0"
                  src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=Vijayawada&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                ></iframe>
                <a href="https://mcpenation.com/">Minecraft Website</a>
              </div>
            </div>
            {/* <Car/> */}
            <div id="output">
              <label id="distLabel" for="dis" className="disl">
                Distance:
                <p id="distance">0</p>
                <p className="KM"> KM</p>
              </label>
            </div>
          </div>
          <div id="status" className="status">
            <p>
              Status: <i className="fa fa-times fa-lg" aria-hidden="true"></i>{" "}
              Not approved
            </p>
          </div>
          {/* <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDxGmu2YS_ujmYjhmuNSsJuT-AHN4BBa-4"></script> */}
          {/* <script src={"../../components/map/cardriving.js"}></script> */}
        </div>
      </body>
    </div>
  );
}
