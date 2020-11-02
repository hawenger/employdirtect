import React, {useRef, useState} from 'react';

export default function FilterButton({employees}) {
    const onsitebox = useRef();
    const remotebox = useRef();
    let onSite= null;
    let remote= null;

    function handleSubmit(e) {
        e.preventDefault();
        if(onsitebox.current.checked === true && remotebox.current.checked === true) {
            console.log('error');
            onSite= null;
            remote= null;
        }
        if(onsitebox.current.checked === false && remotebox.current.checked === true) {
            console.log('remote only');
            onSite= false;
            remote=true;
        }
        if(onsitebox.current.checked === true && remotebox.current.checked === false) {
            console.log('on-site only');
            onSite= true;
            remote=false;
        }
      }
    return (
        <div>
            <form onSubmit={handleSubmit} ClassName="hidden">
                <input ref={remotebox} type="checkbox" name="employeeremote" id="employeeremote"/>
                <label for="employeeremote">Remote</label>
                <input ref={onsitebox}  type="checkbox"name="employeeonsite" id="employeeonsite"/>
                <label  for="employeeonsite">On-Site</label>
                <button ClassName="btn" type="submit">FILTER</button>
            </form>
            <br></br>
        </div>
    )
}
