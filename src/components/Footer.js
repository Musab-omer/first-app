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
                                <h4>Contact us</h4>
                                <ul className="list-unstyled">
                                    <li>Sudan</li>
                                    <li>Khartoum</li>
                                    <li>musab.katry@gmail.com</li>
                                    <li>+2031231231</li>
                                </ul>
                            </div>
                            <div className="col-md-3 col-sm-6">
                                {/* col1 */}
                                <h4>section 1</h4>
                                <ul className="list-unstyled">
                                    <li><a href="/">Lorem 1</a></li>
                                    <li><a href="/">Lorem 2</a></li>
                                    <li><a href="/">Lorem 3</a></li>
                                    <li><a href="/">Lorem 4</a></li>
                                </ul>
                            </div>
                            <div className="col-md-3 col-sm-6">
                                {/* col1 */}
                                <h4>section 1</h4>
                                <ul className="list-unstyled">
                                <li><a href="/">Lorem 1</a></li>
                                    <li><a href="/">Lorem 2</a></li>
                                    <li><a href="/">Lorem 3</a></li>
                                    <li><a href="/">Lorem 4</a></li>
                                </ul>
                            </div>
                            <div className="col-md-3 col-sm-6">
                                {/* col1 */}
                                <h4>section 1</h4>
                                <ul className="list-unstyled">
                                <li><a href="/">Lorem 1</a></li>
                                    <li><a href="/">Lorem 2</a></li>
                                    <li><a href="/">Lorem 3</a></li>
                                    <li><a href="/">Lorem 4</a></li>
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