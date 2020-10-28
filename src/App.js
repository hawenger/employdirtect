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
      <button>SEARCH</button>
      <table>
        <EmployeeList employees = {employees} />
      </table>
    </>
  )
}

export default App;
