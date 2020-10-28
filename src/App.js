import React, { useState } from 'react';
import EmployeeList from './components/EmployeeList';

function App() {
  const remote = {value: true,
  name:'REMOTE'};
  const onSite = {value: false, name: 'On-Site'}
  const[employees, setEmployees] = useState([{id: 'EMPLOYEE ID', firstName: 'FIRST NAME', lastName: 'LAST NAME', email:'E-MAIL', remote: 'REMOTE STATUS'},{ id: 1, firstName: 'Robert', lastName: 'Smith', email: 'grannysmith@hotmail.com',  remote: remote.name}])
  return (
    <>
      <input type="text"/>
      <input type="email" id="email" name="email" multiple></input>
      <input type="number" name="empId" id="id" min="1" max="10"></input>
      <select id="simple" name="simple">
        <option>Last Name</option>
        <option selected>First Name</option>
        <option>Employee ID</option>
        <option>E-mail</option>
      </select>

      <button>SEARCH</button>
      <table>
        <EmployeeList employees = {employees} />
      </table>
    </>
  )
}

export default App;
