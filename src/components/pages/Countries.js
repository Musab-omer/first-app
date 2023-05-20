import React from "react";
import CountryCard from "./CountryCard";
import img1 from "../../assets/imgs/sudan.jpeg";
import img2 from "../../assets/imgs/ksa.jpeg";
import img3 from "../../assets/imgs/egypt.jpg";
import img4 from "../../assets/imgs/sudan.jpg";
class Countries extends React.Component {
    render() {
        let Name=['sudan','saudi arabia','egypt','dubai'];
        let Prograph=['Plunge into the pleasures of the 4-star Mercure Hurghada Hotel - literally! Explore some of the most spectacular coral reefs in the world at this all-inclusive holiday resort on the edge of the crystal-clear Red Sea. ','Plunge into the pleasures of the 4-star Mercure Hurghada Hotel - literally! Explore some of the most spectacular coral reefs in the world at this all-inclusive holiday resort on the edge of the crystal-clear Red Sea. ','Plunge into the pleasures of the 4-star Mercure Hurghada Hotel - literally! Explore some of the most spectacular coral reefs in the world at this all-inclusive holiday resort on the edge of the crystal-clear Red Sea. ','Plunge into the pleasures of the 4-star Mercure Hurghada Hotel - literally! Explore some of the most spectacular coral reefs in the world at this all-inclusive holiday resort on the edge of the crystal-clear Red Sea. ']
        return (
            <React.Fragment>
                <div className="container mt-4 mb-3">
                    <div className="row">
                        <div className="col-md-3">
                            <CountryCard countryName={Name[0]} countryImage={img1} countryPrograph={Prograph[0]}/>
                        </div>
                        <div className="col-md-3">
                            <CountryCard countryName={Name[1]} countryImage={img2} countryPrograph={Prograph[0]}/>
                        </div>
                        <div className="col-md-3">
                            <CountryCard countryName={Name[2]} countryImage={img3} countryPrograph={Prograph[0]}/>
                        </div>
                        <div className="col-md-3">
                            <CountryCard countryName={Name[3]} countryImage={img4} countryPrograph={Prograph[0]}/>
                        </div>
                        
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
export default Countries;