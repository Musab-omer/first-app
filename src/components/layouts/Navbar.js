import React from "react";
import { Link } from "react-router-dom";


class Navbar extends React.Component {
    render() {
        return (
            <React.Fragment>
                <nav className="navbar navbar-expand-sm navbar-dark bg-dark shadow-lg fixed-top">
                    <a href="/" className="navbar-brand">React Routing</a>
                    <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#mainNavbar">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="mainNavbar">
                        <ul className="navbar-nav m-auto">
                            <li className="nav-item mx-2">
                                <Link to="" className="nav-link">Home</Link>
                            </li>
                            <li className="nav-item mx-2">
                                {/* <a href="/employees/list" className="nav-link">Employees</a> */}
                                <Link to="/employees/list" className="nav-link">Employees</Link>
                            </li>
                            <li className="nav-item mx-2">
                                {/* <a href="/stocks/list" className="nav-link">Stocks</a> */}
                                <Link to="/stocks/list" className="nav-link">Stocks</Link>
                            </li>
                            <li className="nav-item ">
                                {/* <a href="/about" className="nav-link">About</a> */}
                                <Link to="/about" className="nav-link">About</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </React.Fragment>
        );
    }
}
export default Navbar;