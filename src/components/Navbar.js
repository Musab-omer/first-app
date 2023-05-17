import React from "react";

class Navbar extends React.Component {
    render() {
        return (
            <React.Fragment>
                <nav className="navbar navbar-expand-md navbar-dark bg-light">
                    <a href="/" className="navbar-brand" data-toggler="collapse" data-target="navbarNav">MusabHotel</a>
                    <button className="navbar-toggler">
                        <span className="navbar-toggler-icon"/>
                    </button>
                </nav>
            </React.Fragment>
        );
    }
}
export default Navbar;