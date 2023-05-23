
import React from "react";

class MessageCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            message: ''
        }
    }

    updateName = (event) => {
        this.setState(
            {
                name: event.currentTarget.value
            }
        );
    }
    updateMessage = (event) => {
        this.setState(
            {
                message: event.currentTarget.value
            }
        );
    }
    render() {
        return (
            <React.Fragment>
                <div className="container mt-3">
                    <div className="row">
                        <div className="col">
                            <div className="card">
                                <div className="card-header bg-success text-white">
                                    <p className="h3">React With Form Biding</p>
                                </div>
                                <div className="card-body">
                                    <form className=""  >
                                        <div className="form-group">
                                            <input type="text" className="form-control" placeholder="Name"
                                             onChange={this.updateName} />
                                        </div>
                                        <div className="form-group">
                                            <input type="test" className="form-control" placeholder="Message..." 
                                            onChange={this.updateMessage} />
                                        </div>
                                        <h3 id="message">Name :{this.state.name}</h3>
                                        <h3 id="message">Message :{this.state.message}</h3>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
export default MessageCard;