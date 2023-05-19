import React from "react";

class CountryCard extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className="card">
                    <div className="card-body p-0">
                        <img src={this.props.countryImage} className="img-fluid img-thumbnail shadow" alt="country1"/>
                        <h3 className="m-auto text-upercase p-1">{this.props.countryName}</h3>
                        <p className="text-justify p-2">{this.props.countryPrograph}</p>
                        <a href="/#" className="btn btn-secondary btn-sm p-1">Learn more ...</a>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
export default CountryCard;