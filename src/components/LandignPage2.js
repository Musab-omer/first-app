import React from "react";
import backImage from "../assets/imgs/landing2.jpg";

class LandingPage2 extends React.Component {
    render() {
        return (
            <React.Fragment>
                
                <div className="bg-image" style={{backgroundImage:"url("+backImage+")",height:"100vh",backgroundRepeat:"no-repeat",backgroundSize:"100% 100%"}}>
                    <div className="h-100 text-light text-center d-flex flex-column justify-content-center" style={{backgroundColor:"rgba(0,0,0,0.7)"}}>
                        <h1 className="display-1">Welcom to our World</h1>
                        <p className="display-3">Tours + Travel</p>
                        <a href="#about" className="btn-orange  ml-auto mr-auto p-2">Learn more</a>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
export default LandingPage2;