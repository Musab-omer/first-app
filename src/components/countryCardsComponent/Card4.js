import React from "react";

import other from "../../assets/imgs/other_3.jpg";

class Card4 extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className="card">
                    <div className="card-body">
                        <img src={other} alt="" className="img-fluid"></img>
                        <p>Culpa aliquip nisi ad aliquip. Ea culpa occaecat esse cupidatat mollit ipsum in sint nisi commodo eiusmod. Nisi magna ad id ipsum velit velit labore fugiat est sunt consequat ut ipsum. Sint consectetur incididunt .</p>
                        <button className="btn btn-secondary">read more</button>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
export default Card4;