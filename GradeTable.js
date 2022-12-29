import React, { useState } from 'react';
import { Table } from 'react-bootstrap';
import './custom.scss';
const GradeTable = ({ assignments, setAssignments }) => {
  const handleChange = (e) => {
    setAssignments([...assignments, { [e.target.name]: e.target.value }]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <Table striped bordered hover>
        <tbody>
          {assignments.map((assignment) => (
            <tr>
              <td>{assignment.name}</td>
              <td>{assignment.grade}</td>
              <td>{assignment.weight}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      <form onSubmit={handleSubmit}>
      <label className='labelStyle'>
          Assignment <span> </span>
          <input type="text" name="name" onChange={handleChange} />
        </label>
        <br></br>
        <br></br>
        <label className='labelStyle'>
          Grade  <span> </span> <span> </span>
          <input type="text" name="grade" onChange={handleChange} />
        </label>
        <br></br>
        <br></br>
        <label className='labelStyle'>
          Weight <span> </span>
          <input type="text" name="weight" onChange={handleChange} />
        </label>
        <br></br>
        <br></br>
        <button type="submit" className='button'>Add assignment</button>
        <br></br>
      </form>
    </div>
  );
};

export default GradeTable;
