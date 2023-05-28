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
                    
                </nav>
            </React.Fragment>
        );
    }
}
export default Navbar;