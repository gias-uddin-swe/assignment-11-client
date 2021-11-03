import React, { useState } from "react";
import AddServices from "../../AddServices/AddServices";
import Services from "../../Services/Services";

import "./AdminDashboard.css";
import MangeOrder from "./../../MangeOrder/MangeOrder";

const AdminDashboard = () => {
  const [control, setControl] = useState("addServices");

  console.log(control);

  console.log(control);
  return (
    <div className="admin-container">
      <div className="dashboard">
        <div className="admin-box">
          <div className="row admin-container">
            <div className="col-md-3 ">
              <div className="admin-area p-1">
                <h6>Dashboard</h6>
                <div className="all-menu mt-5">
                  <li
                    onClick={() => setControl("addServices")}
                    className="admin-menu p-2"
                  >
                    Add Services
                  </li>

                  <li
                    onClick={() => setControl("services")}
                    className="admin-menu p-2"
                  >
                    Manage Services
                  </li>
                  <li
                    onClick={() => setControl("MangeOrder")}
                    className="admin-menu p-2"
                  >
                    Manage Orders
                  </li>
                  <li
                    onClick={() => setControl("status")}
                    className="admin-menu p-2"
                  >
                    Orders Status
                  </li>
                </div>
              </div>
            </div>
            <div className="col-md-9 text-center  text-center">
              <h1>render your components</h1>

              {control === "services" && <Services></Services>}
              {control === "MangeOrder" && <MangeOrder></MangeOrder>}
              {control === "addServices" && <AddServices></AddServices>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
