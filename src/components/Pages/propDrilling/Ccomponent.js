import React, { Component } from 'react'

 class Ccomponent extends Component {
  render() {
    return (
        <React.Fragment>
        <div className='container'>
            <div className='row'>
                <div className='col'>
                    <div className='card'>
                        <div className='card-body bg-success'>
                            <p className='h4'>C Component</p>
                            <pre>{JSON.stringify(this.props.resivePersonalInfo)}</pre>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </React.Fragment>
    )
  }
}
export default Ccomponent;
