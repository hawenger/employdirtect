import React, { useState } from 'react';
import EmployeeList from './components/EmployeeList';
import FilterButton from './components/FilterButton';
import Form from './components/Form';
import './index.css';

function App() {
  const remote = {value: true,
  name:'REMOTE'};
  const onSite = {value: false, name: 'On-Site'}
  const[employees, setEmployees] = useState([{id: 'EMPLOYEE ID', firstName: 'FIRST NAME', lastName: 'LAST NAME', email:'E-MAIL', remote: 'REMOTE STATUS'},{ id: 1, firstName: 'Robert', lastName: 'Smith', email: 'grannysmith@hotmail.//com',  remote: remote.name},{ id: 2, firstName: 'Emma', lastName: 'Hockings', email: 'hillsLive@gmail.com',  remote: onSite.name}, { id: 3, firstName: 'Bobby', lastName: 'Mendez', email: 'Mandez@gmail.com',  remote: remote.name}])

  function remoteEmployees() {
    setEmployees(employees.filter(function(obj) {
      return obj.remote === remote;
    }))
  }

  return (
    <>
      <Form/>
      <FilterButton/>
      <table>
        <thead></thead>
        <tbody>
          <EmployeeList employees = {employees} />
        </tbody>
        
      </table>
      <button onClick={remoteEmployees}>CLICK ME</button>
    </>
  )
}
export default App;