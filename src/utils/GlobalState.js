//import React, { createContext, useReducer, useContext } from "react";
//
//const RemoteContext = createContext();
//const { Provider } = RemoteContext;
//
//const reducer = (state, action) => {
//  switch (action.type) {
//  case "remoteOnly":
//    return { remote: state.remote = true};
//  case "onSiteOnly":
//    return { remote: state.remote = false };
//    case "all":
//        return { remote: state.remote = null };
//  default:
//    throw new Error(`Invalid action type: ${action.type}`);
//  }
//};
//
//const RemoteProvider = ({ value = null, ...props }) => {
//  const [state, dispatch] = useReducer(reducer, { Remote: value });
//
//  return <Provider value={[state, dispatch]} {...props} />;
//};
//
//const useRemoteContext = () => {
//  return useContext(RemoteContext);
//};
//
//export { RemoteProvider, useRemoteContext };
//