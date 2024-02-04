import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import LOGO from "./LogoEV.png"

function Assignment() {
  const [destructuredResponse, setDestructuredResponse] = useState();

  const fetchData = async () => {
    try {
      const response = await axios.get("https://randomuser.me/api");
      setDestructuredResponse(response.data.results);
      console.log("Api Response:", response);
    } catch (error) {
      console.error(error.message);
    }
  };

  // useEffect(() => {
  //   fetchData();
  //   console.log("called");
  // },[]);

  function reset() {
    setDestructuredResponse();
  }
  return (
    <div className="container">
      <div className="header">
      <img src={LOGO} alt="logo" className="logo"></img>
      <h1>
        <span className="east">east</span>
        <span className="vantage">vantage 
        </span>
        <span>&nbsp;Assignment</span>
        
      </h1>
      </div>
      <input
        type="button"
        onClick={() => fetchData()}
        value={destructuredResponse ? "Refresh" : "Fetch Data"}
        style={{
          backgroundColor: destructuredResponse ? "green" : "blue",
          color: "#fff",
        }}
        className="button-refresh"
      />
      <input
        type="button"
        onClick={() => reset()}
        value="Reset"
        style={{
          backgroundColor: "red",
          color: "#fff",
        }}
        className="button-reset"
      />
      {destructuredResponse && (
        <div className="data-container">
          <div className="label-value-pair">
            <label className="label">Name:</label>
            <p className="value">
              {Object.values(destructuredResponse[0]?.name).join(" ")}
            </p>
          </div>
          <div className="label-value-pair">
            <label className="label">Email:</label>
            <p className="value">{destructuredResponse[0]?.email}</p>
          </div>
          {/* <pre style={{ textAlign: "left" }}>
            {JSON.stringify(destructuredResponse, null, 2)}
          </pre> */}
        </div>
      )}
    </div>
  );
}

export default Assignment;
