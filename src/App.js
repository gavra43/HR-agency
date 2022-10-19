import "./App.css";
import React, { useEffect, useState } from "react";
import HomePage from "./Pages/HomePage/HomePage";
import HiringPage from "./Pages/HiringPage/HiringPage";
// import { Route } from "react-router-dom";
import { Switch, Route } from "react-router-dom";

function App() {
  const [frontEndDevelopers, setFrontEndDevelopers] = useState([]);
  const [isDataValid, setIsDataValid] = useState("");
  // const [onHomePage, setOnHomePage] = useState(true);
  // const [backEndDevelopers, setBackEndDevelopers] = useState([]);
  // const [boardOfDirectors, setBoardOfDirectors] = useState([]);
  // const [managers, setManagers] = useState([]);

  useEffect(() => {
    fetchFrontEnd();
    // fetchBackEnd();
    // fetchBOF();
    // fetchManagers();
  }, [isDataValid]);

  // const fetchData =(endpoint, setMethod) =>{
  //   fetch(`https://62b47af3530b26da4cbf9543.mockapi.io/${endpoint}`)
  //     .then((res) => res.json())
  //     .then((employees) => setMethod(employees));

  // }

  // const togglePages = () => {
  //   setOnHomePage(!onHomePage);
  // };

  const activateFetch = () => {
    setIsDataValid(!isDataValid);
  };

  const fetchFrontEnd = () => {
    fetch("https://62b47af3530b26da4cbf9543.mockapi.io/frontend")
      .then((res) => res.json())
      .then((developers) => setFrontEndDevelopers(developers));
  };

  // const fetchBackEnd = () => {
  //   fetch("https://62b47af3530b26da4cbf9543.mockapi.io/backend")
  //     .then((res) => res.json())
  //     .then((developers) => setBackEndDevelopers(developers));
  // };

  // const fetchBOF = () => {
  //   fetch("https://62b47af3530b26da4cbf9543.mockapi.io/boardOfDirectors")
  //     .then((res) => res.json())
  //     .then((directors) => setBoardOfDirectors(directors));
  // };

  // const fetchManagers = () => {
  //   fetch("https://62b47af3530b26da4cbf9543.mockapi.io/managers")
  //     .then((res) => res.json())
  //     .then((managers) => setManagers(managers));
  // };

  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <HomePage
            activateFetch={activateFetch}
            // togglePages={togglePages}
            developers={frontEndDevelopers}
          ></HomePage>
        </Route>
        <Route path="/">
          <HiringPage activateFetch={activateFetch}></HiringPage>
        </Route>
      </Switch>
      {/* {onHomePage && (
        <HomePage
          togglePages={togglePages}
          developers={frontEndDevelopers}
        ></HomePage>
      )}
      {!onHomePage && <HiringPage></HiringPage>} */}
    </div>
  );
}

export default App;
