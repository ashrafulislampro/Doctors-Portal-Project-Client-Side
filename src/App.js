import React, { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import Appointment from "./Components/Appointment/Appointment/Appointment";
import Home from "./Components/Home/Home/Home";
import Login from "./Components/Registration/Login/Login";
import Registration from "./Components/Registration/Registration";
import NotFound from "./NotFound/NotFound";
import Dashboard from "./Components/Dashboard/Dashboard/Dashboard";
import Appointments from "./Components/Dashboard/AppointmentsByDate/Appointments";
import Patients from "./Components/Dashboard/Patients/Patients";
import Prescription from "./Components/Dashboard/Prescription/Prescription";
import Setting from "./Components/Dashboard/Setting/Setting";
import PrivateRoute from './Components/Registration/Login/PrivateRoute/PrivateRoute';
import AddDoctor from "./Components/Dashboard/AddDoctor/AddDoctor";
export const UserContext = createContext();
function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
    <Router>
      <Switch>
        <Route path="/home">
          <Home/>
        </Route>
        <Route path="/appointments">
          <Appointments/>
        </Route>
        <Route path="/patients">
          <Patients/>
        </Route>
        <Route path="/prescriptions">
          <Prescription/>
        </Route>
        <PrivateRoute path="/dashboard">
          <Dashboard/>
        </PrivateRoute>
        <Route path="/addDoctor">
          <AddDoctor/>
        </Route>
        <Route path="/setting">
          <Setting/>
        </Route>
        <PrivateRoute path="/appointment">
          <Appointment/>
        </PrivateRoute>
        <Route path="/login">
          <Login/>
        </Route>
        <Route path="/registration">
          <Registration/>
        </Route>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route path="*">
          <NotFound/>
        </Route>
      </Switch>
    </Router>
    </UserContext.Provider>
  );
}

export default App;
