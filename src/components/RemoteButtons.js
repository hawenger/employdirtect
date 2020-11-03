import React, {useRef, useState} from 'react';
import '../index.css'

export default function RemoteButtons({remoteEmployees, onSiteEmployees, allEmployees}) {

    const [hideRemote, setHideRemote]= useState(false);
    const [hideOnSite, setHideOnSite]= useState(false);
    const [hideAll, setHideAll]= useState(true);
    const remoteButton= useRef();
    const onSiteButton= useRef();
    const allButton= useRef();
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
        setHideOnSite(false);
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
            <button style={{ display: hideRemote ? "none" : "block" }} ref={remoteButton} className="remoteFilter" value = {true} onClick={remoteEmployees, hideRemoteButton}>REMOTE</button>
            <button style={{ display: hideOnSite ? "none" : "block" }} ref={onSiteButton} className="onSiteFilter" value={true} onClick={onSiteEmployees, hideOnSiteButton}>On-Site</button>
            <button style={{ display: hideAll ? "none" : "block" }} ref={allButton} className="allFilter" value={true} onClick={allEmployees, hideAllButton}>All</button>
        </div>
    )
}
