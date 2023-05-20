import React from "react";
import img1 from "../../assets/imgs/Healthy2.jpeg";
import img2 from "../../assets/imgs/Healthy3.jpeg";
import img3 from "../../assets/imgs/other6.jpeg";


class About extends React.Component{
    render(){
        return(
            <React.Fragment>
                <div className="  mt-3 mb-3 p-3 bg-secondary text-white text-center d-flex flex-column justfy-content-center">
                    <div className="container">
                    <h3 className="display-5">Mercure Hurghada Hotel </h3>
                    <p>Plunge into the pleasures of the 4-star Mercure Hurghada Hotel - literally! Explore some of the most spectacular coral reefs in the world at this all-inclusive holiday resort on the edge of the crystal-clear Red Sea.</p>
                    <div className="row mt-5 bg-light text-dark">
                        <div className="col-md-6">
                            <img src={img1} alt="" className="img-fluid img-thumbnail shadow"/>
                        </div>
                        <div className="col-md-6 justify-content-center d-flex flex-column">
                            <p className="text-justify p-3">Enjoy a wide selection of fresh & delicious seafood dishes in a modern setting. Offered once per stay free for Ultra all inclusive guests only.</p>
                        </div>
                    </div>

                    <div className="row mt-5 bg-light text-dark">
                        <div className="col-md-6 justify-content-center d-flex flex-column">
                        <p className="text-justify  p-3">enjoy the three concepts Mercure breakfast between high energy and health corner as well as American breakfast at our EL ANDALOS main restaurant for a good day start .</p>
                        </div>
                        <div className="col-md-6">
                           
                            <img src={img2} alt="" className="img-fluid img-thumbnail shadow"/>
                        </div>
                    </div>

                    <div className="row mt-5 bg-light text-dark">
                        <div className="col-md-6">
                            <img src={img3} alt="" className="img-fluid img-thumbnail  shadow"/>
                        </div>
                        <div className="col-md-6 justify-content-center d-flex flex-column">
                            <p className="text-justify p-3">Buffet Style venue offers show cooking and high quality cuisine from different corners of the world. Guests can enjoy their meals in the outdoor terrace overlooking the pool</p>
                        </div>
                    </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
export default About;