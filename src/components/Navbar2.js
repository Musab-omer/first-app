import React from "react";

class Navbar2 extends React.Component {
    render() {
        return (
            <React.Fragment>
                <nav className="navbar navbar-expand-lg navbar-dark orange">
                    <a className="navbar-brand text-dark" href="#">GoTours</a>
                    <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarNav">
                        <span className="navbar-toggler-icon"/>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item active">
                                <a className="nav-link" href="#home">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#countries">Countries</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="about">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#countact">Countact us</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </React.Fragment>
        );
    }
}
export default Navbar2;