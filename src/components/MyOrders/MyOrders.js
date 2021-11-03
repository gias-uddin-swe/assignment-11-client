import React, { useEffect, useState } from "react";

const MyOrders = () => {
  const email = sessionStorage.getItem("email");
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/myBooking/${email}`)
      .then((res) => res.json())
      .then((result) => setServices(result));
  }, [email]);

  return (
    <div>
      <h1>My orders </h1>

      <div className="services">
        <div className="row container">
          {services?.map((pd) => (
            <div className="col-md-4">
              <div className="service border border p-3">
                <div className="services-img ">
                  <img className="w-100" src={pd?.image} alt="" />
                </div>

                <h6>{pd?.name}</h6>
                <h4>{pd?.model}</h4>
                <p>{pd?.description}</p>
                <h3 className="text-danger"> Cost :{pd?.price}$</h3>

                <button className="btn btn-danger">Cancel</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyOrders;
