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
                    <Link to="/about" className="btn btn-dark  rounded rounded-circle">Learn More ...</Link>
                    <div className="pt-5">
                        <a href="https://www.facebook.com/musab.katry/" className="text-white mx-2" target="_blank"><i className=" bi bi-facebook"></i></a>
                        <a href="" className="text-white mx-2" target="_blank"><i className="bi bi-twitter"></i></a>
                        <a href="https://www.youtube.com/@CodeWithMusab" target="_blank" className="text-white mx-2"><i className="bi bi-youtube"></i></a>
                        <a href="" target="_blank" className="text-white mx-2"><i className="bi bi-linkedin"></i></a>
                        <a href="https://github.com/Musab-omer" target="_blank" className="text-white mx-2"><i className="bi bi-github"></i></a>
                       
                    </div>
                    
                </div>
            </div>
           </React.Fragment>
        );
    }
    
}
export default Home;