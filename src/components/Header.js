import React from "react";
import { Link } from "react-router-dom";

const Header = (props) => {
    return (
        <nav className="menu">
            <ul>
                <li><Link to="/">Home</Link></li>
                {props.isAuthenticated &&
                    <li><Link to="/cadastrar">Cadastrar</Link></li>
                }

                {!props.isAuthenticated &&
                    <li><Link to="/login">Login</Link></li>
                }

                {props.isAuthenticated &&
                    <li>
                        <button
                            className="btnLink" 
                            onClick={(event) => {
                                event.preventDefault();
                                props.onLogout();
                            }}
                            >Logout
                        </button>
                    </li>
                }
            </ul>
        </nav>
    )
}
export default Header;