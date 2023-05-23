import React from "react";

class Navbar extends React.Component {
    render() {
        return (
            <React.Fragment>
                <nav className="navbar navbar-expand-md navbar-dark bg-secondary">
                    <a href="/" className="navbar-brand">React with Form Binding</a>
                    <button className="navbar-toggler" data-toggle="collapse" data-target="#navbarNav">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a href="/" className="nav-link">Home</a>
                            </li>
                            <li className="nav-item">
                                <a href="/" className="nav-link">About</a>
                            </li>
                        </ul>
                    </div>
                </nav>

            </React.Fragment>
        );
    }
}
export default Navbar;