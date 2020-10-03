import React from 'react';
import ReactDOM from 'react-dom';

export default function Footer() {
    return (
        <div className="footer">
            <div className="newsletter">
                <div className="title">
                    <h4>Newsletter Signup</h4>
                </div>
                <div className="input">
                    <form>
                        <input type="email" id="email" name="email" placeholder="Enter your email"></input>
                        <input type="submit" value="Register"></input>
                    </form>
                </div>
            </div>
            <div className="spacer">
                    
                </div>
            <div className="socials">
                <div><h4>Connect Us</h4></div>
                <div>FB</div>
                <div>Twitter</div>
                <div>IG</div>
            </div>
        </div>
    )
}