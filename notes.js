////onClick={triggerSearchSelection}
  ////const lastSearch = useRef();
  ////const firstSearch = useRef();
  ////const idSearch = useRef();
  ////const remoteSearch = useRef();
  ////const onSiteSearch = useRef();
  ////const emailSearch = useRef();
  ////const exactSearch = useRef();
  ////function triggerSearchSelection(e) {
  ////  console.log({onSiteSearch}.current.checked);
  ////}
  ////
  ////
  ////
  ////
  //import React, {useRef, useState} from 'react';
//
  //export default function FilterButton({remoteEmployees, onSiteEmployees, allEmployees}) {
  //    const onsitebox = useRef();
  //    const remotebox = useRef();
  //    let onSite= null;
  //    let remote= null;
  //
  //    function handleSubmit(e) {
  //        e.preventDefault();
  //        if(onsitebox.current.checked === true && remotebox.current.checked === true) {
  //            alert('CONTRADICTION. This is not Waiting for Godot. Please select only one box');
  //        }
  //        if(onsitebox.current.checked === false && remotebox.current.checked === true) {
  //            console.log('remote only');
  //        }
  //        if(onsitebox.current.checked === true && remotebox.current.checked === false) {
  //            console.log('on-site only');
  //
  //        }
  //      }
  //    return (
  //        <div>
  //            <form onSubmit={handleSubmit} ClassName="hidden">
  //                <input onClick={remoteEmployees} ref={remotebox} type="checkbox" name="employeeremote" //id="employeeremote"/>
  //                <label for="employeeremote">Remote</label>
  //                <input onClick={onSiteEmployees} ref={onsitebox}  type="checkbox"name="employeeonsite" //id="employeeonsite"/>
  //                <label for="employeeonsite">On-Site</label>
  //                <button ClassName="btn" type="submit">FILTER</button>
  //            </form>
  //            <br></br>
  //        </div>
  //    )
  //}