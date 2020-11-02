import React from "react";
import { useRemoteContext } from "../utils/GlobalState";

function Remote() {
  const [state, dispatch] = useRemoteContext();
  return (
    <div className="App">
      <button className="btn btn-success mt-5 mb-5" onClick={() => dispatch({ type: "remoteOnly" })}>
        On-Site Only
      </button>
      <div>{state.remote}</div>
      <button className="btn btn-danger mt-5" onClick={() => dispatch({ type: "onSiteOnly" })}>
        Remote Only
      </button>
      <button className="btn btn-danger mt-5" onClick={() => dispatch({ type: "all" })}>
        All
      </button>
    </div>
  );
}

export default Remote;
