import React, { Component } from 'react'
import Bcomponent from './Bcomponent';
import { json } from 'react-router';

class Acomponent extends Component {
     constructor(props) {
        super(props);
        
     }
     
    render() {
        return (
            <React.Fragment>
                <div className='container'>
                    <div className='row'>
                        <div className='col'>
                            <div className='card'>
                                <div className='card-body bg-warning'>
                                    <p className='h4'>A Component</p>
                                    <pre>{JSON.stringify(this.props.resivePersonalInfo)}</pre>
                                    <Bcomponent resivePersonalInfo={this.props.resivePersonalInfo}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
export default Acomponent;
