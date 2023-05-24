import React from "react";

class Navbar extends React.Component {
    render() {
        return (
            <React.Fragment>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    <a href="/" className="navbar-brand">Online Application Form</a>
                    <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#mainNavbar">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="mainNavbar">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a href="/" className="nav-link">Home</a>
                            </li>
                            <li className="nav-item">
                            <a href="/" className="nav-link">Personal</a>
                            </li>
                            <li className="nav-item">
                                <a href="/" className="nav-link">Education</a>
                            </li>
                            <li className="nav-item">
                                <a href="/" className="nav-link">Experience</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </React.Fragment>
        );
    }
}
export default Navbar;