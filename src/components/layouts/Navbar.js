import React from "react";

class Navbar extends React.Component {
    render() {
        return (
            <React.Fragment>
                <nav className="navbar navbar-expand-md navbar-dark bg-secondary">
                    <a href="/" className="navbar-brand">React with Props and State</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarlinks" >
                        <span className="navbar-toggler-icon"/>
                    </button>
                    
                    
                </nav>
            </React.Fragment>
        );
    }
}
export default Navbar;