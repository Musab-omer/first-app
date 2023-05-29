import React from "react";
import ClientCard from './ClientCard';
import ServerCard from './ServerCard';
class MiddleWareCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cMessage: '',
            sMessage: ''
        }
    }

    updateState = (data,name) => {
       
        name==="client"?
        this.setState({
            ...this.state,
            cMessage: data
        }):
        this.setState({
            ...this.state,
            sMessage: data
        })
    }
    render() {
        return (
            <React.Fragment>
                <div className='container mt-3'>
                    <div className='row'>
                        <div className='col-md-6'>
                            {/* <pre>{this.state.sMessage}</pre> */}
                            <ClientCard ServerMessage={this.state.sMessage} updateMiddelware={this.updateState} />
                        </div>
                        <div className='col-md-6'>
                            {/* <pre>{this.state.cMessage}</pre> */}
                            <ServerCard clientMessage={this.state.cMessage} updateMiddelware={this.updateState}/>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
export default MiddleWareCard;