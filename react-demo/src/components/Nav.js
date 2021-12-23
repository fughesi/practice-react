import React from "react";
import logo from '../img/logo192.png'

export default function Nav() {
    return (
        <div id="navBar">
            <img src={logo} alt="dis my shit" />
            <div id="navText">
                <h3>ReactFacts</h3>
                <h4>React Course - Project 1</h4>
            </div>

            {/* <ul>
                <li><a href="#">Pricing</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
            </ul> */}
        </div>
    )
}