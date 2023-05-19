import React from "react";
import logo from '../assets/imgs/HotelLogo1.png';
class Navbar extends React.Component {
    render() {
        return (
            <React.Fragment>
                <nav className="navbar navbar-expand-md navbar-dark bg-secondary fixed-top">
                    <a href="/#" className="navbar-brand ml-5"><img src={logo} style={{ height: "50px" }} /></a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav m-auto">
                            <li className="nav-item active">
                                <a href="/#" className="nav-link text-uppercase"><i className="fa fa-home"> Home</i></a>
                            </li>
                            <li className="nav-item ml-2">
                                <a href="/#" className="nav-link text-uppercase"> <i className="fa fa-globe"> Countries</i></a>
                            </li>
                            <li className="nav-item ml-2">
                                <a href="/#" className="nav-link text-uppercase"><i className="fa fa-info"> About</i> </a>
                            </li>
                            <li className="nav-item ml-2">
                                <a href="/#" className="nav-link text-uppercase"><i className="fa fa-envelope"> Contact</i></a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </React.Fragment>
        );
    }
}
export default Navbar;