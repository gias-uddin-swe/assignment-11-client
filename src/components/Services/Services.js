import React from "react";
import "./Services";
import { useState, useEffect } from "react";
import { Table } from "react-bootstrap";
const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/allServices")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  console.log(services);
  return (
    <div>
      <div className="container">
        <h1>Manage Services </h1>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Service Title</th>
              <th>Event description</th>
              <th>Image Link</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          {services?.map((pd, index) => (
            <tbody>
              <tr>
                <td>{index}</td>
                <td>{pd.name}</td>
                <td>{pd.description}</td>
                <td>{pd.image}</td>
                <td>{pd.status}</td>
                <button className="btn bg-danger p-2">Delete</button>
              </tr>
            </tbody>
          ))}
        </Table>
      </div>
    </div>
  );
};

export default Services;
