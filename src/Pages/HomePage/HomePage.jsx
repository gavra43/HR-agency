import React, { useState } from "react";
import "./homepage.scss";
import Header from "../../Components/Header/Header";
import EmployeeCard from "../../Components/EmployeeCard/EmployeeCard";
import Modal from "../../Components/Modal/Modal";

function HomePage(props) {
  //stejet koji cuva podataka da li je modal otvoren ili zatvoren
  const [modalOpen, setModalOpen] = useState(false);
  // stejt koji cuva podatak o selektovanom employee-u

  const [modalData, setModalData] = useState("");

  const selectEmployee = (obj) => {
    setModalData(obj);
  };

  const openModal = () => {
    setModalOpen(true);
  };

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

  return (
    <div>
      <Header goToHiringPage={props.togglePages}></Header>
      {props.developers.map((e) => (
        <EmployeeCard
          activateFetch={props.activateFetch}
          selectEmployee={selectEmployee}
          openModal={toggleModal}
          employee={e}
        />
      ))}
      {/* <EmployeeCard></EmployeeCard>
            <EmployeeCard></EmployeeCard>
            <EmployeeCard></EmployeeCard>
            <EmployeeCard></EmployeeCard>
            <EmployeeCard></EmployeeCard> */}
      {modalOpen && <Modal data={modalData} closeModal={toggleModal}></Modal>}
    </div>
  );
}

export default HomePage;
