import React, { useState } from 'react';
import EmployeeList from './components/EmployeeList';
import Form from './components/Form';

function App() {

  const remote = {value: true,
  name:'REMOTE'};
  const onSite = {value: false, name: 'On-Site'}
  const[employees, setEmployees] = useState([{id: 'EMPLOYEE ID', firstName: 'FIRST NAME', lastName: 'LAST NAME', email:'E-MAIL', remote: 'REMOTE STATUS'},{ id: 1, firstName: 'Robert', lastName: 'Smith', email: 'grannysmith@hotmail.com',  remote: remote.name},{ id: 2, firstName: 'Emma', lastName: 'Hockings', email: 'hillsLive@gmail.com',  remote: onSite.name}])

  return (
    <>
      <Form/>
      <table>
        <thead></thead>
        <tbody>
          <EmployeeList employees = {employees} />
        </tbody>
      </table>
    </>
  )
}
export default App;
