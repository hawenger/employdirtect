import React, { useState, useRef } from 'react';
import EmployeeList from './components/EmployeeList';
import FilterButton from './components/FilterButton';
import Form from './components/Form';
import RemoteButtons from './components/RemoteButtons'
import './index.css';

function App() {

  let nameInput=useRef();
  const remote = {value: true,
  name:'REMOTE'};
  const onSite = {value: false, name: 'On-Site'}
  const currentEmployees = [{id: 'EMPLOYEE ID', firstName: 'FIRST NAME', lastName: 'LAST NAME', email:'E-MAIL', remote: 'REMOTE STATUS'},{ id: 1, firstName: 'Robert', lastName: 'Smith', email: 'grannysmith@hotmail.com',  remote: remote.name},{ id: 2, firstName: 'Emma', lastName: 'Hockings', email: 'hillsLive@gmail.com',  remote: onSite.name}, { id: 3, firstName: 'Bobby', lastName: 'Mendez', email: 'Mandez@gmail.com',  remote: remote.name}]
  const allEmployee = currentEmployees;
  const[employees, setEmployees] = useState(currentEmployees)

  function remoteEmployees() {

    setEmployees(employees.filter(function(obj) {
      return obj.remote === remote.name;
    }))
  }
  function onSiteEmployees() {

    setEmployees(employees.filter(function(obj) {
      return obj.remote === onSite.name;
    }))
  }
  function allEmployees() {
    setEmployees(allEmployee);
  }

  function lastNameSearch() {
    let newData = Object.assign([], currentEmployees);
    let res=nameInput.current.value;
    console.log(res)
    setEmployees(newData.filter(function(obj){
     
      return obj.lastName.match(res)
    }))
  }

  return (
    <>
      <h1>DIRTECT EMPLOYEES</h1>
      <Form/>
      <FilterButton/>
      <input ref={nameInput} type="text"></input>
      <button onClick={lastNameSearch}>CLICK ME</button>
      <RemoteButtons remoteEmployees = {remoteEmployees} onSiteEmployees = {onSiteEmployees} allEmployees={allEmployees}/>
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