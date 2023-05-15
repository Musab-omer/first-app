import React from "react";
import ksa from "../../assets/imgs/ksa.jpeg"
class CountryCard extends React.Component {
    render() {
        console.log(this.props.cardImage);
        return (
            <React.Fragment>
                <div className="card mt-3">
                    <div className="card-body">
                        <img src={this.props.cardImage} className="img-fluid" />
                    <h2 className="mt-1">{this.props.country}</h2>
                        <p>Aute cupidatat mollit ex id sunt eiusmod veniam laboris magna. Officia fugiat voluptate irure sunt nostrud dolore laboris enim aute sunt sunt adipisicing. Aliqua labore aliqua aliqua consequat cupidatat aliqua magna elit deserunt et dolore cupidatat ad incididunt. Id nulla deserunt aute occaecat aute qui laboris incididunt nostrud.</p>
                        <a href="#" className="btn btn-orange">learn more</a>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
export default CountryCard;