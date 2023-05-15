import React from "react";
import landingImage from "../assets/imgs/landing2.jpg";
class LandingPage extends React.Component {
    render() {
        return (
            <React.Fragment>
            <div className="bg-image" style={{backgroundImage:"url("+landingImage+")",height:'100vh',backgroundRepeat:"no-repeat",backgroundSize:"100% 100%"}}>
                <div className="text-center text-light  d-flex flex-column justify-content-center h-100" style={{backgroundColor:"rgba(0,0,0,0.7)"}}>
                    <h1 className="display-1">Welcome to our World</h1>
                    <p className="display-4">Tours + Travel </p>
                    <a href="#about" className="btn-info p-2 ml-auto mr-auto">Learn More</a>
                </div>
            </div>
            </React.Fragment>
        );
    }
}
export default LandingPage;