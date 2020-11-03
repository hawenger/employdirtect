import React, { useState} from 'react';
import '../index.css'

export default function RemoteButtons({remoteEmployees, onSiteEmployees, allEmployees}) {

    const [hideRemote, setHideRemote]= useState(false);
    const [hideOnSite, setHideOnSite]= useState(false);
    const [hideAll, setHideAll]= useState(false);
    function hideRemoteButton(value) {
        setHideRemote(value);
        setHideOnSite(false);
        setHideAll(false);
    }
    function hideOnSiteButton(value) {
        setHideOnSite(value);
        setHideRemote(false);
        setHideAll(false);
    }
    function hideAllButton(value) {
        setHideAll(value);
        setHideRemote(false);
        setHideOnSite(false)
    }
    //function showRemoteButton() {
    //    setHide(false);
    //}
    //function showOnSiteButton() {
    //    setHide(false);
    //}
    //function showAllButton() {
    //    setHide(false);
    //}
    
    return (
        <div>
            <button style={{ display: hideRemote ? "none" : "block" }}className="remoteFilter" value = {true} onClick={remoteEmployees}>REMOTE</button>
            <button style={{ display: hideOnSite ? "none" : "block" }}className="onSiteFilter" value={true} onClick={onSiteEmployees}>On-Site</button>
            <button style={{ display: hideAll ? "none" : "block" }} className="allFilter" value={true} onClick={allEmployees}>All</button>
        </div>
    )
}
