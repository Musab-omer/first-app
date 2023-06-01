import React from "react";
import image from '../../../../assets/imgs/sudan.jpeg'

class GithubProfileCard extends React.Component{
    constructor(props) {
        super(props);
        
    }

    render() {
        return (
            <React.Fragment>
                
                        <div className="card">
                            <div className="card-body">
                                <img src={image} className="card-img" alt="" />
                                <p className="card-title">Musab Mohamemd</p>
                                <p className="card-text">Occaecat non culpa non laborum enim commodo consectetur dolore ipsum cupidatat ipsum dolore mollit.</p>
                            </div>
                        </div>
                    
            </React.Fragment>
        );
    }
    
}
export default GithubProfileCard;