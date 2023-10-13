import React, { Component } from "react";
import Button from "react-bootstrap/Button";

class Navbar extends React.Component {
  render() {
    return (
      <div
        className="container-fluid"
        style={{
          padding: "5px 20px",
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div className="left">
          <button className="btn btn-light">
            <i class="fa-solid fa-table-list me-1"></i> List
          </button>
          <button className="btn btn-light mx-2">
            <i class="me-1 fa-regular fa-calendar-days"></i>
            Calendar
          </button>
        </div>
        <div className="right d-flex justify-content-center align-items-center">
          <input
            type="text"
            className="shadow-none form-control"
            placeholder="Search..."
          />
          <div className="btn btn-light mx-1">
            <i
              className="fa-solid fa-bell fs-5"
              style={{ cursor: "pointer" }}
            ></i>
          </div>
          <div className="btn btn-light mx-1">
            <i
              className="fa-solid fa-gear fs-5"
              style={{ cursor: "pointer" }}
            ></i>
          </div>
        </div>
      </div>
    );
  }
}
export default Navbar;
