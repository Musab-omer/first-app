import React from "react";

class ServerCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sMessage: '',
        }
    }

    updateInput = (event) => {
        this.setState({
            sMessage: event.target.value
        })
    }

    SendToMiddelware = (event) => {
        event.preventDefault();
        this.props.updateMiddelware(this.state.sMessage, "server")
    }

    render() {
        return (
            <React.Fragment>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="card">
                                <div className="card-header bg-primary text-white">
                                    <p className="h4">Server</p>
                                </div>
                                <div className="card-body">
                                    <form className="form-inline">
                                        <div className="form-group">
                                            <input type="text" value={this.state.sMessage}
                                                // onChange={this.updateInput}
                                                onChange={e => this.setState({ sMessage: e.target.value })}
                                                className="form-control" placeholder="message..." />
                                            <button className="btn btn-primary btn-sm"
                                                onClick={this.SendToMiddelware}
                                            >Send</button>
                                        </div>
                                    </form>
                                </div>
                                <div className="card-footer">
                                    From Client : {this.props.clientMessage}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
export default ServerCard;