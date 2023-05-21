import React from "react";

class MessageCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            message: "Hello"
        }
    }

    greet = () => {
        this.setState({
            message: 'Good Morning'
        });
    }

    sayGoodAfternoon = () => {
        this.setState({
            message: 'Good Afternon',

        });
    }

    sayGoodEvening =(value)=>{
        this.setState({
            message:value
        });
    }

    greetPerson=(value,person)=>{
        this.setState({
            message:value,
            name:person
        })
    }
    render() {

        return (
            <React.Fragment>
                <div className="container mt-3">
                    <div className="row">
                        <div className="col">
                            <div className="card">
                                <div className="card-body">
                                    <h2>{this.state.message} {this.state.name} </h2>
                                    <button className="btn btn-success btn-sm" type="button" onClick={this.greet}>greet</button>
                                    <button className="btn btn-warning btn-sm" type="button" onClick={this.sayGoodAfternoon}>Afternon</button>
                                    <button className="btn btn-primary btn-sm" type="button" onClick={this.sayGoodEvening.bind(this,'Good Evening')}>Good Evening</button>
                                    <button className="btn btn-info btn-sm" type="button" onClick={this.greetPerson.bind(this,'Hello','Musab')}>greeting Person</button>
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