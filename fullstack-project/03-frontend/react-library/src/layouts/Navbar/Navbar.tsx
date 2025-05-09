import React from "react";
import {Link, NavLink} from "react-router-dom";
import { useOktaAuth} from "@okta/okta-react";
import {SpinnerLoading} from "../utils/SpinnerLoading";

export const Navbar = () => {

    const { oktaAuth, authState } = useOktaAuth();

    if (!authState) {
        <SpinnerLoading/>
    }

    const handleAuthLogout = () => oktaAuth.signOut();
    console.log(authState);

    return (
        <nav className="navbar navbar-expand-lg navbar-dark main-color py-3">
            <div className="container-fluid">
        <span className="navbar-brand">
            Fullstack Library
        </span>
                <button className="navbar-toggler" type="button"
                        data-bs-toggle="collapse" data-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"
                > <span className='navbar-toggler-icon'></span> </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink className="nav-link" to={'/home'}>Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to={'/search'}>Search Books</NavLink>
                        </li>
                    </ul>
                    <ul className="navbar-nav ms-auto">
                        {!authState?.isAuthenticated ?
                            <li className="nav-item m-1">
                                <Link type='button' className="btn btn-outline-light" to={"/login"}>Sign-in</Link>
                            </li>
                            :
                            <li>
                                <button type={"button"} onClick={handleAuthLogout}>Logout</button>
                            </li>
                        }
                    </ul>
                </div>
            </div>
        </nav>
    );
}