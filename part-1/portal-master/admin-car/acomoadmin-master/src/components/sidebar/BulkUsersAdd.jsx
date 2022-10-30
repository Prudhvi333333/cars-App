import Papa from "papaparse";
import axios from "axios";
import React, { useState } from "react";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";

export default function BulkUsersAdd() {
  const createAccount = async (email) => {
    console.log(email);
    var password = Math.random().toString(36).slice(-10);
    const res = await createUserWithEmailAndPassword(
      getAuth(),
      email,
      password
    );
    console.log(res);
  };
  const changeHandler = (event) => {
    Papa.parse(event.target.files[0], {
      header: true,
      skipEmptyLines: true,
      complete: function (results) {
        for (let i in results.data) {
          sendDataTODB(results.data[i]);
          createAccount(results.data[i].Mail);
        }
        // const rowsArray = [];
        // const valuesArray = [];

        // // Iterating data to get column name and their values
        // results.data.map((d) => {
        //   rowsArray.push(Object.keys(d));
        //   valuesArray.push(Object.values(d));
        // });
        // getDataHere(results.data);
        console.log(results.data);
      },
    });
  };

  const sendDataTODB = async (data) => {
    const res = await axios.post(
      "https://carbooking-3603a-default-rtdb.firebaseio.com/users.json",
      data
    );
  };

  return (
    <div>
      <input
        type="file"
        name="file"
        onChange={changeHandler}
        accept=".csv"
        style={{ display: "block", margin: "10px auto" }}
      />
      <br />
    </div>
  );
}
