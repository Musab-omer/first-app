import React from "react";

class Navbar extends React.Component {
    render() {
        return (
            <React.Fragment>
               <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <a className="navbar-brand" href="#">ToursWithUs</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav mr-auto" >
                    <li className="nav-item active">
                        <a className="nav-link" href="home">
                        <i className="fa fa-home"> Home</i>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="countries"> 
                        <i className="fa fa-flag"> Countries</i>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="countact">
                            <i className="fa fa-address-card"> Contact us</i>
                        </a>
                    </li>
                </ul>
                </div>
               </nav>
            </React.Fragment>
        );
    }
}
export default Navbar;