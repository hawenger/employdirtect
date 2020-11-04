import React, { useState, useRef } from 'react';
import EmployeeList from './components/EmployeeList';
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

  function sortAscending() {
    let newData = Object.assign([], employees);
    let sortedData = newData.sort(function(a, b){
      if (a.lastName < b.lastName) return -1;
      else if (a.lastName > b.lastName) return 1;
      return 0;
    });
    setEmployees(sortedData);
  }

  function sortDescending() {
    let newData = Object.assign([], employees);
    let sortedData = newData.sort(function(a, b){
      if (a.lastName > b.lastName) return -1;
      else if (a.lastName < b.lastName) return 1;
      return 0;
    });
    setEmployees(sortedData);
  }

  function lastNameSearch() {
    let newData = Object.assign([], currentEmployees);
    let res=nameInput.current.value.toLowerCase();
    console.log(res)
    setEmployees(newData.filter(function(obj){
     
      return obj.lastName.toLowerCase().match(res)
      
    }))
  }

  return (
    <>
      <h1>DIRTECT EMPLOYEES</h1>
      <input ref={nameInput} type="text"></input>
      <button onClick={lastNameSearch}>SEARCH</button>
      <button onClick={sortAscending}>Last Name (A-Z)</button>
      <button onClick={sortDescending}>Last Name (Z-A)</button>
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