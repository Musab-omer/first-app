import { event } from "jquery";
import React from "react";

import { Component, Fragment } from "react";

class SMSApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            maxCount:100,
            charCount: 100
        }
    }

    messageCounter = (event) => {
        this.setState({
            charCount: (100- event.currentTarget.value.length) >0?100- event.currentTarget.value.length:0
        });
    }
    render() {
        return (
            <Fragment>
                <div className="container mt-3">
                    <div className="row">
                        <div className="col">
                            <div className="card">
                                <div className="card-header bg-info text-white">
                                    <p className="h4">App Message</p>
                                </div>
                                <div className="card-body bg-light">
                                    <form>
                                        <div className="form-group">
                                            <textarea rows="5" cols="50" maxLength={this.state.maxCount}
                                            onChange={this.messageCounter}
                                            className="form-control form-control-lg"
                                                 />
                                        </div>
                                    </form>
                                </div>
                                <div className="card-footer bg-info text-white">
                                    <p className="h5">The remaining Characters : {this.state.charCount}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}
export default SMSApp;