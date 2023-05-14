import React from "react";

import desert2 from "../../assets/imgs/desert_4.jpg";

class Card2 extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className="card">
                    <div className="card-body">
                        <img src={desert2} alt="" className="img-fluid"></img>
                        <p>Ea culpa do cillum cupidatat Lorem est mollit proident ex. Anim deserunt incididunt laboris anim nostrud minim. Laboris nostrud consequat aute velit nostrud fugiat laborum. Aute qui laboris in qui ullamco ullamco.</p>\
                        <button className="btn btn-secondary">read more</button>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
export default Card2;