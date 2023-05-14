import React from "react";
import desert1 from "../../assets/imgs/desert_2.jpg";
class CountryCard extends React.Component{
    render(){
        console.log(this.props);
        return(
            <React.Fragment>
                <div className="card rounded-top-left mt-3">
                                <div className="card-body">
                                    <img src={this.props.cardImg}  className="img-fluid rounded-top-left" />
                                    <p className="h4 text-capitalize">{this.props.country}</p>
                                    <p className="text-left">{this.props.pragraph}</p>
                                    <button className="btn btn-secondary">read more</button>
                                </div>
                            </div>
            </React.Fragment>
        );
    }
}
export default CountryCard;