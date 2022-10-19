import React, { useState } from "react";
import "./hiringPage.scss";
import Header from "../../Components/Header/Header";

function HiringPage(props) {
  const [body, setBody] = useState({
    fullName: "",
    technology: [],
    seniority: "",
    salary: 0,
    linkedin: "",
  });

  const submitDeveloper = () => {
    fetch(`https://62b47af3530b26da4cbf9543.mockapi.io/frontend`, {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => props.activateFetch());
  };

  return (
    <div id="hiring-page">
      <Header></Header>
      <h2>Hire new developer</h2>
      <div className="form">
        <label htmlFor="">
          Full name :
          <input
            onChange={(event) => {
              setBody({ ...body, fullName: event.target.value });
            }}
            type="text"
            id="fullname"
            placeholder="Name"
          />
        </label>
        <label htmlFor="">
          Technologies :
          <input
            onChange={(event) => {
              setBody({ ...body, technology: event.target.value.split(",") });
            }}
            type="text"
            id="technology"
            placeholder="Technologies"
          />
        </label>
        <label htmlFor="">
          Seniority :
          <input
            onChange={(event) => {
              setBody({ ...body, seniority: event.target.value });
            }}
            type="text"
            id="seniority"
            placeholder="Seniority"
          />
        </label>
        <label htmlFor="">
          Salary :
          <input
            onChange={(event) => {
              setBody({ ...body, salary: event.target.value });
            }}
            type="number"
            id="salary"
            placeholder="Salary"
          />
        </label>
        <label htmlFor="">
          LinkedIn :
          <input
            onChange={(event) => {
              setBody({ ...body, linkedin: event.target.value });
            }}
            type="text"
            id="linkedin"
            placeholder="LinkedIn Profile"
          />
        </label>
        <button onClick={submitDeveloper}>Hire developer</button>
      </div>
    </div>
  );
}

export default HiringPage;
