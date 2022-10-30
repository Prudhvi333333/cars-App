import "./widgets.scss";
import React from "react";

const Widgets = ({ type, insuranceCount, numberOfCabs, cabsAvailableNow }) => {
  let data;
  switch (type) {
    case "rooms":
      data = {
        Main: "ACOMMODATION",
      };
      break;

    case "vehicle":
      data = {
        Main: "CAB BOOKING",
      };
      break;

    case "vehicles":
      data = {
        title: "Cabs for today",
        rooms: 0,
        // link:"See all cabs"
      };
      break;

    case "carclaim":
      data = {
        title: "CABS AVAIABLE NOW",
        rooms: 0,
        // link:"See all Users"
      };
      break;

    case "carins":
      data = {
        title: "CABS USED TODAY",
        rooms: 20,
        // link:"See all Users"
      };
      break;

    case "rooms present":
      data = {
        title: "Rooms Available",
        rooms: 20,
        // link:"Click to see rooms"
      };
      break;
    case "ro":
      data = {
        title: "Rooms occupied",
        rooms: 20,
        // link:"Click to see rooms"
      };
      break;

    case "cra":
      data = {
        title: "Requests Approved",
        rooms: 0,
        // link:"Click to see Approved Cabs"
      };
      break;

    case "crp":
      data = {
        title: "Cabs available now",
        rooms: cabsAvailableNow,
        // link:"Click to see for avaiable Cabs"
      };
      break;

    case "crr":
      data = {
        title: "Number of Rides used",
        rooms: 0,
        // link:"Click to see Rejected list"
      };
      break;

    case "cab":
      data = {
        title: "Number of cabs",
        rooms: numberOfCabs,
        // link:"Click to see Details of the Cab"
      };
      break;

    case "ins":
      data = {
        title: "Insurance Alert",
        rooms: insuranceCount,
        // link:"Click to see Details"
      };
      break;

    case "alrt":
      data = {
        title: "Servive Over Due",
        rooms: 0,
        // link:"Click to see Details of the Cab"
      };
      break;
    default:
      break;
  }
  return (
    <div className="widget">
      <div className="left">
        <span className="title">{data.title}</span>
        <span className="counter">{data.rooms}</span>
        <span className="link">{data.link}</span>
      </div>
      <div className="right">
        <span className="main">{data.Main}</span>
      </div>
    </div>
  );
};

export default Widgets;
