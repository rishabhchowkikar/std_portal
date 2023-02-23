import React from "react";
import pie from "../../assests/meta-chart (1).png";
import "./chart.css";
function chart() {
  return (
    <div>
      <img src={pie} alt="Image" height={250} className="chart" />
    </div>
  );
}

export default chart;
