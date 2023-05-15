import React from "react";
import CountryCard from "./CountryCard";
import image1 from '../../assets/imgs/sudan.jpeg';
import image2 from '../../assets/imgs/egypt.jpg';
import image3 from '../../assets/imgs/dubai.jpeg';
import image4 from '../../assets/imgs/ksa.jpeg';

class CountryCards extends React.Component {
    render() {
        let countries =['Sudan','Egypt','Emarat','Saudi Arabia'];
        return (
            <React.Fragment>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-3">
                            <CountryCard cardImage={image1} country={countries[0]}/>
                        </div>
                        <div className="col-sm-3">
                            <CountryCard cardImage={image2} country={countries[1]}/>
                        </div>
                        <div className="col-sm-3">
                            <CountryCard cardImage={image3} country={countries[2]}/>
                        </div>
                        <div className="col-sm-3">
                            <CountryCard cardImage={image4} country={countries[3]}/>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
export default CountryCards;