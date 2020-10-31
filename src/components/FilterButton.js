import React, {useRef} from 'react';

export default function FilterButton(props) {
    const onsitebox = useRef();
    const remotebox = useRef();
    //const inputValue = function() {
    //    if(this.current == checked) {
    //        console.log('true')
    //    }
    //}
    function handleSubmit(e) {
        e.preventDefault();
        alert('Hello, world!');
        console.log(props);
        console.log(onsitebox.current.value);
      }
    return (
        <div>
            <form onSubmit={handleSubmit} ClassName="hidden">
                <input ref={remotebox} type="checkbox" name="employeeremote" id="employeeremote"/>
                <label for="employeeremote">Remote</label>
                <input ref={onsitebox} type="checkbox" value="checked" name="employeeonsite" id="employeeonsite"/>
                <label  for="employeeonsite">On-Site</label>
                <button ClassName="btn" type="submit">FILTER</button>
            </form>
            <br></br>
        </div>
    )
}
