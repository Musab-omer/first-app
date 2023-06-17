import React from "react";
import grocery1 from '../../../assets/imgs/grocery.jpg';
import grocery2 from '../../../assets/imgs/grocery2.jpg';
import grocery3 from '../../../assets/imgs/grocery3.jpg';

class Home extends React.Component {
    constructor(props) {
        super(props);

    }
    
   
    render() {
        return (
            <React.Fragment>
                <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel" >
                    <ol className="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                    </ol>
                    <div className="carousel-inner" >
                        <div className="carousel-item active">
                            <img src={grocery1} className="d-block   w-100" height="500px" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src={grocery2} className="d-block  w-100" height="500px" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src={grocery3} className="d-block  w-100" height="500px" alt="..." />
                        </div>
                        
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
            </React.Fragment>
        );
    }
}
export default Home;