import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Widgets from "../../components/widgets/Widgets";
import Table from "../../components/table/Table";
import "./home.scss";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
const Home = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    loadDataFromAPI();
  }, []);

  const loadDataFromAPI = async () => {
    var cabsAvailable = 0;
    var insuranceCount = 0;
    var numberOfCabs = 0;
    const { data } = await axios.get(
      "https://carbooking-3603a-default-rtdb.firebaseio.com/cabs.json"
    );

    for (let i in data) {
      if (Date.parse(data[i].INSURANCE_DATE) - Date.now() <= 2.628e9) {
        insuranceCount++;
      }
      if (Date.now() - Date.parse(data[i].busyUntil) >= 0) {
        // console.log(data[i].busyUntil);
        // setCabsAvailable(cabsAvailable + 1);
        cabsAvailable++;
      }
      numberOfCabs++;
    }

    // console.log(cabsAvailable);
    setData({ cabsAvailable, insuranceCount, numberOfCabs });
  };
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          <Widgets type="vehicle" cabsAvailableNow />
          <Widgets type="cab" numberOfCabs={data.numberOfCabs} />
          <Widgets type="crp" cabsAvailableNow={data.cabsAvailable} />
          <Widgets type="ins" insuranceCount={data.insuranceCount} />
          {/* <Widgets type="alrt" cabsAvailableNow /> */}
          {/* <Widgets type="carins" /> */}
        </div>
      </div>
    </div>
  );
};

export default Home;
