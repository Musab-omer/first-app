import React from 'react' 

class CustomersCards extends React.Component{
    constructor(props) {
        super(props);
        
    }
    
    render() {
        return (
           <React.Fragment>
            <div className='container mt-3'>
                <div className='row'>
                    <div className='col'>
                        <h1>Customers</h1>
                    </div>
                </div>
            </div>
           </React.Fragment>
        );
    }
    
}
export default CustomersCards