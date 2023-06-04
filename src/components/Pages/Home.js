import React from "react";
import imgBackground from '../../assets/imgs/businesLanding.jpg';
import {Link} from 'react-router-dom';

class Home extends React.Component{
    constructor(props) {
        super(props);
        
    }

    render() {
       
        return (
           <React.Fragment>
            <div  style={{backgroundImage:"url('"+imgBackground+"')",backgroundSize:"cover",backgroundRepeat:"no-repeat",height:"100vh"}}>
                <div className="d-flex flex-column align-items-center justify-content-center text-white d-sm-flex" style={{height:"100vh",backgroundColor:"rgba(0,0,0,0.5)"}}>
                    <h3 className="">Ex exercitation reprehenderit labore deserunt</h3>
                    <Link to="/about" className="btn btn-dark btn-sm">Learn More ...</Link>
                    
                </div>
            </div>
           </React.Fragment>
        );
    }
    
}
export default Home;