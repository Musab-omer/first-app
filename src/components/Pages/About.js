import React from "react";
import myImg from '../../assets/imgs/_DSC6232.jpg';

class About extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <React.Fragment>
                <div className="container" style={{ marginTop: "100px" }}>
                    <div className="row">
                        <div className="col-md-6 d-flex flex-column justify-content-center align-items-center">
                            
                                <p className="h2">So , who am I ?</p>
                                <p className="text-monospace">Have 5+ years of Professional experience in developing Web-based, Client/Server applications, Internet/Intranet applications and Windows-based applications using Microsoft Technologies </p>
                            
                        </div>
                        <div className="col-md-6 alig-item-center">
                            <div className="text-center">
                                <img src={myImg} className="img-fluid rounded" style={{height:"400px"}} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }

}
export default About;