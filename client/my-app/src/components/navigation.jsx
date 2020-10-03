import React from 'react';
import ReactDOM from 'react-dom';

export default function Navigation() {
    return(
        <div className="navigation">
            <div className="title">
                <h1>ICrowdTask</h1>
            </div>
            <div className="menu">
                <ul>
                    <li>How It Works</li>
                    <li>Requesters</li>
                    <li>Workers</li>
                    <li>Pricing</li>
                    <li>About</li>
                </ul>
            </div>
            <div className="signIn">
                <ul>
                    <li>Sign in</li>
                </ul>
            </div>
        </div>
    )
}