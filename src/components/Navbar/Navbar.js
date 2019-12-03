import React, { Component } from 'react';
import './Navbar.css';
import { faHome, faList, faMountain, faCogs, faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default class Navbar extends Component {
    render() {
        return (
            <div className="Navbar">
                <div className="logo">
                    <p>Logo</p>
                </div>
                <div className="tabs">
                    <a><FontAwesomeIcon style={{ padding: '4px 20px 0px 0px' }} icon={faHome} />Home</a>
                    <a className="active"><FontAwesomeIcon style={{ padding: '4px 20px 0px 0px' }} icon={faList} />List</a>
                    <a><FontAwesomeIcon style={{ padding: '4px 20px 0px 0px' }} icon={faMountain} />Escalation</a>
                    <a><FontAwesomeIcon style={{ padding: '4px 20px 0px 0px' }} icon={faCogs} />Settings</a>
                    <a><FontAwesomeIcon style={{ padding: '4px 20px 0px 0px' }} icon={faUserCircle} />Account</a>
                </div>
            </div>
        )
    }
}
