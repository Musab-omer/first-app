import React from "react";

class Footer extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className="main-footer bg-secondary  text-white postion-stick">
                    <div className="container text-center pt-3">
                        <div className="row">
                            <div className="col-md-3 col-sm-6">
                                {/* col1 */}
                                <h4>section 1</h4>
                                <ul className="list-unstyled">
                                    <li>Lorem 1</li>
                                    <li>Lorem 2</li>
                                    <li>Lorem 3</li>
                                    <li>Lorem 3</li>
                                </ul>
                            </div>
                            <div className="col-md-3 col-sm-6">
                                {/* col1 */}
                                <h4>section 1</h4>
                                <ul className="list-unstyled">
                                    <li>Lorem 1</li>
                                    <li>Lorem 2</li>
                                    <li>Lorem 3</li>
                                    <li>Lorem 3</li>
                                </ul>
                            </div>
                            <div className="col-md-3 col-sm-6">
                                {/* col1 */}
                                <h4>section 1</h4>
                                <ul className="list-unstyled">
                                    <li>Lorem 1</li>
                                    <li>Lorem 2</li>
                                    <li>Lorem 3</li>
                                    <li>Lorem 3</li>
                                </ul>
                            </div>
                            <div className="col-md-3 col-sm-6">
                                {/* col1 */}
                                <h4>section 1</h4>
                                <ul className="list-unstyled">
                                    <li>Lorem 1</li>
                                    <li>Lorem 2</li>
                                    <li>Lorem 3</li>
                                    <li>Lorem 3</li>
                                </ul>
                            </div>
                        </div>
                        {/* Footer Bottom */}
                        <div className="footer-buttom p-2">
                            <p className="text-xs-center">
                                &copy;{new Date().getFullYear()} Musab Hotel app - All Rights Reserved
                            </p>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
export default Footer;