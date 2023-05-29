





import React from "react";


class ClientCard extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            cMessage:''
        }
    }

    updateInput=(event)=>{
        this.setState({
            cMessage:event.target.value
        })
    }
    SendToMiddelware=(event)=>{
        event.preventDefault();
        this.props.updateMiddelware(this.state.cMessage,"client")
    }
    render() {
        return (
            <React.Fragment>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            {/* <pre>{this.state.cMessage}</pre> */}
                            <div className="card">
                                <div className="card-header bg-secondary text-white">
                                    <p className="h4">Client</p>
                                </div>
                                <div className="card-body">
                                    <form className="form-inline">
                                        <div className="form-group">
                                            <input type="text"  className="form-control"
                                            value={this.state.cMessage}
                                            // onChange={this.updateInput}
                                            onChange={e => this.setState({cMessage: e.target.value})}
                                            placeholder="message..."/>
                                            <button className="btn btn-success btn-sm" onClick={this.SendToMiddelware}>Send</button>
                                        </div>
                                    </form>
                                </div>
                                <div className="card-footer">
                                    From Server : {this.props.ServerMessage}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
export default ClientCard;