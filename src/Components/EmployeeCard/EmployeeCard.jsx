import React from "react";
import "./employeecard.scss";

function EmployeeCard(props) {
  const deleteEmployee = () => {
    fetch(
      `https://62b47af3530b26da4cbf9543.mockapi.io/frontend/${props.employee.id}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => res.json())
      .then((res) => props.activateFetch());
  };

  return (
    <div id="employee-card">
      <h1>{props.employee.fullName}</h1>
      <h3>Seniority:{props.employee.seniority}</h3>
      <h3>Salary:{props.employee.salary}€</h3>
      <ul>
        {props.employee.technology.map((e) => (
          <li>{e}</li>
        ))}
      </ul>
      <div className="button-wrapper">
        <button
          className="more-info"
          onClick={() => {
            props.openModal();
            props.selectEmployee(props.employee);
          }}
        >
          Info
        </button>
        <button className="del-dev" onClick={deleteEmployee}>
          x
        </button>
      </div>
    </div>
  );
}

export default EmployeeCard;
