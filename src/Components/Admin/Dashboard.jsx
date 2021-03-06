import React from "react";
import { Table } from "reactstrap";
import people from "../../people.js";

export default function Dashboard() {
  return (
   <div className="fluid">
       <h2 style={{textAlign:'center',margin:'10px',textDecoration:'underline'}}>List of Logged Users</h2>
        <Table dark className="mt-5" style={{fontSize:'20px'}}>
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
        </tr>
      </thead>
      <tbody>
        {people.map((p) => (
          <tr>
            <th scope="row">1</th>
            <td>{p.fname}</td>
            <td>{p.lname}</td>
            <td>{p.email}</td>
          </tr>
        ))}
      </tbody>
    </Table>
   </div>
  );
}
