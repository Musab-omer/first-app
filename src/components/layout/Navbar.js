import React from "react";
import {Link} from 'react-router-dom';

class Navbar extends React.Component {
    constructor(props) {
        super(props);

    }
    render() {
        return (
            <React.Fragment>
               <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
              
               <Link to="/" className="navbar-brand ml-5">
                 <i className="bi bi-cart4"></i> Bigbasket
                </Link>
                <button className="navbar-toggler" data-toggle="collapse" data-target="#main-nav">
                    <sapn className="navbar-toggler-icon"></sapn></button>
                    <div className="navbar-collapse collapse" id="main-nav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                               <Link to='/' className="nav-link">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/products/list' className="nav-link">Products</Link>
                            </li>
                        </ul>
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item mr-5">
                                <Link to="/products/admin" className="nav-link">Admin</Link>
                            </li>
                        </ul>
                    </div>
               </nav>
            </React.Fragment>
        );
    }
}
export default Navbar;