import React, {useRef} from 'react';

export default function Form() {
    const lastSearch = useRef();
    const firstSearch = useRef();
    const idSearch = useRef();
    const remoteSearch = useRef();
    const onSiteSearch = useRef();
    const emailSearch = useRef();
    const exact = useRef();
    
  function triggerSearchSelection(e) {
    console.log({exact}.current.checked);
     
 }
    return (
        <div>
            <form>
                <label for="firstname">First Name:</label>
                <input ref={firstSearch} type="text" placeholder="(not required)"/>
                <label for="lastname">Last Name:</label>
                <input ref={lastSearch} type="text" placeholder="(not required)"/>
                <label for="email">E-mail:</label>
                <input ref={emailSearch} type="email" placeholder="(not required)"/>
                <label for="lastname">Employee ID:</label>
                <input ref={idSearch} type="number" placeholder="(not required)"/>
                <input ref={remoteSearch} type="checkbox" name="employeeremote" id="employeeremote"/>
                <label for="employeeremote">Remote</label>
                <input ref={onSiteSearch} type="checkbox" name="employeeonsite" id="employeeonsite"/>
                <label for="employeeonsite">On-Site</label>
                <input ref={exact} type="checkbox" name="exact" id="exact"/>
                <label for="exact">EXACT</label>
            </form>
            <button type="submit" onClick={triggerSearchSelection}>SEARCH</button>
        </div>
    )
}
