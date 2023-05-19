import React from "react";
import backImage from '../../assets/imgs/hotelBackground.jpg';
class LandingPage extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className="" style={{backgroundImage:"url("+backImage+")",backgroundRepeat:"no-repeat",backgroundSize:"100% 100%",height:"100vh"}}>
                    <div className="text-white text-center justify-content-center d-flex flex-column" style={{backgroundColor:"rgba(0,0,0,0.5)",height:"100vh"}}>
                        <h1 className="display-4">Hotel for travellers looking for local and authentic experience</h1>
                        <p>Our team are at your disposal to make your experience seamless and memorable</p>
                        <a className="btn-secondary ml-auto mr-auto p-1">Learn more ...</a>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
export default LandingPage;