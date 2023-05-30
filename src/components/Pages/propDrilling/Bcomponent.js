import React, { Component } from 'react'
import Ccomponent from './Ccomponent';

 class Bcomponent extends Component {
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
                        <div className='card-body bg-secondary'>
                            <p className='h4'>B Component</p>
                            <pre>{JSON.stringify(this.props.resivePersonalInfo)}</pre>
                            <Ccomponent resivePersonalInfo={this.props.resivePersonalInfo}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </React.Fragment>
    )
  }
}
export default Bcomponent;
