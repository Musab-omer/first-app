import React from "react";

import health from "../../assets/imgs/Healthy2.jpeg";

class Card3 extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className="card">
                    <div className="card-body">
                        <img src={health} alt="" className="img-fluid"></img>
                        <p>Est aliqua sit tempor tempor nisi. Eiusmod consequat dolore laboris do. Est sunt id velit anim anim enim cillum aliquip minim laborum. Nisi ad aute deserunt aute quis non cillum pariatur amet mollit. Esse ullamco </p>
                        <button className="btn btn-secondary">read more</button>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
export default Card3;