import React from "react";
import "../App.css";
import mpy from "../image/MPY.png"

class Header extends React.Component {
    render() {
        return (

            <header>
                <div className="logo">
                    <img src={mpy} alt="" srcset="" />
                </div>

                <nav className="navbar">

                    <ul className="navbar-menu">
                        <li>
                            <span>Acceuil</span>
                        </li>

                        <li>
                            <span>Page 2</span>
                        </li>
                    </ul>

                </nav>

            </header >
        )
    }
}

export default Header