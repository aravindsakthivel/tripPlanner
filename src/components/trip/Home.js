import React from "react";

export const Home = () => {
  const containerStyle = {
    color: "white", // sets text color to white
    textAlign: "center", // centers text
  };
  return (
    <div>
      <p style={{ color: "white" }}>Hi Welcome to Itinerary planner</p>

      <div style={containerStyle}>
        <br />
        <h4>How to use</h4>
        <br />
        <div style={{ marginBottom: "5px", marginLeft: "5px" }}>
          1. Click on the calendar icon
        </div>
        <div style={{ marginBottom: "5px", marginLeft: "5px" }}>
          2. Choose the date and the destination
        </div>
        <br />
        <h4>Check the plans</h4>
        <br />
        <div style={{ marginBottom: "5px", marginLeft: "5px" }}>
          1. Click on the list icon
        </div>
        <div style={{ marginBottom: "5px", marginLeft: "5px" }}>
          2. Check the list of the plans
        </div>
      </div>
    </div>
  );
};
