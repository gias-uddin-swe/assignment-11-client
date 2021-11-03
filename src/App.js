import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Menubar from "./components/Menubar/Menubar";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import AdminDashboard from "./components/Admin/AdminDashboard/AdminDashboard";
import AddServices from "./components/AddServices/AddServices";
import Services from "./components/Services/Services";
import MyOrders from "./components/MyOrders/MyOrders";
import Booking from "./components/Booking/Booking";

function App() {
  return (
    <div className="App">
      <Router>
        <Menubar></Menubar>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/home">
            <Home></Home>
          </Route>
          <Route exact path="/login">
            <Login></Login>
          </Route>
          <Route exact path="/myOrder">
            <MyOrders></MyOrders>
          </Route>
          <Route exact path="/services">
            <Services></Services>
          </Route>
          <Route exact path="/booking/:serviceId">
            <Booking></Booking>
          </Route>
          <Route exact path="/addServices">
            <AddServices></AddServices>
          </Route>
          <Route exact path="/adminDashboard">
            <AdminDashboard></AdminDashboard>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
