import React from "react";

class Navbar extends React.Component {
    render() {
        return (
            <React.Fragment>
                <nav className="navbar navbar-expand-md navbar-dark bg-light">
                    <a href="/" className="navbar-brand" data-toggle="collapse" data-target="navbarNav">MusabHotel</a>
                    <button className="navbar-toggler">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <a href="/" className="nav-link"><i className="fa fa-home"> Home</i></a>
                            </li>
                            <li className="nav-item">
                                <a href="/" className="nav-link"> <i className="fa fa-globe"> Countries</i></a>
                            </li>
                            <li className="nav-item">
                                <a href="/" className="nav-link"><i className="fa fa-info"> About</i> </a>
                            </li>
                            <li className="nav-item">
                                <a href="/" className="nav-link"><i className="fa fa-envelope"> Contact</i></a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </React.Fragment>
        );
    }
}
export default Navbar;