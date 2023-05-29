import React from "react";
import imgEat from "../../assets/imgs/sudan.jpeg";
import imgCoding from "../../assets/imgs/desert_4.jpg";
import imgsleep from "../../assets/imgs/desert_2.jpg";
import { event } from "jquery";

class Hobies extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            eating: false,
            coding: false,
            sleeping: false
        }
    }

    selectHobies = (event) => {
        this.setState({
            ...this.state,
            [event.target.name]: event.target.checked
        });
    }
    render() {
        let cardeating = document.getElementById('eating-card');
        return (
            <React.Fragment>
                <div className="container mt-3">
                    <div className="row">
                        <div className="col">
                            <div className="card">
                                <div className="card-header bg-success text-white">
                                    <p className="h4">Hobies App</p>
                                </div>
                                <div className="card-body bg-light">
                                    <div className="row">
                                        <div className="col-md-3">
                                            <form>
                                                <div className="form-group">
                                                    <div className="custom-control custom-checkbox custom-control-inline">
                                                        <input type="checkbox" className="custom-control-input" id="eating" name="eating"
                                                            onChange={this.selectHobies}
                                                        />
                                                        <label className="custom-control-label" for="eating">Eating</label>
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <div className="custom-control custom-checkbox custom-control-inline">
                                                        <input type="checkbox" className="custom-control-input" id="coding" name="coding"
                                                            onChange={this.selectHobies}
                                                        />
                                                        <label className="custom-control-label" for="coding">Coding</label>
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <div className="custom-control custom-checkbox custom-control-inline">
                                                        <input type="checkbox" className="custom-control-input" id="sleeping" name="sleeping"
                                                            onChange={this.selectHobies}
                                                        />
                                                        <label className="custom-control-label" for="sleeping">Sleeping</label>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                        <div className="col d-flex">

                                            {
                                                this.state.eating ?
                                                    <React.Fragment>
                                                        <div className="card shadow animated jello" id="eating-card">

                                                            <div className="card-header">
                                                                <img src={imgEat} className="img-fluid" />
                                                            </div>
                                                            <div className="card-body">
                                                                <p>Est amet fugiat consectetur pariatur aliquip id eiusmod exercitation laborum velit enim ex do ut. Deserunt amet et aliqua voluptate nulla incididunt sint. Reprehenderit occaecat do quis ipsum quis elit veniam do. Quis qui Lorem sunt adipisicing cillum sint amet voluptate quis aliquip. Cupidatat aliquip dolor sit ad mollit aliqua do. Labore amet et nulla ipsum et ut est in. Pariatur dolor ad ullamco consectetur consequat ut ex officia.</p>
                                                            </div>
                                                        </div>
                                                    </React.Fragment>: null
                                            }

                                            {
                                                this.state.coding ?
                                                    <React.Fragment>
                                                        <div className="card shadow animated jello" id="code-card">
                                                        <div className="card-header">
                                                            <img src={imgCoding} className="img-fluid" />
                                                        </div>
                                                        <div className="card-body">
                                                            <p>Est amet fugiat consectetur pariatur aliquip id eiusmod exercitation laborum velit enim ex do ut. Deserunt amet et aliqua voluptate nulla incididunt sint. Reprehenderit occaecat do quis ipsum quis elit veniam do. Quis qui Lorem sunt adipisicing cillum sint amet voluptate quis aliquip. Cupidatat aliquip dolor sit ad mollit aliqua do. Labore amet et nulla ipsum et ut est in. Pariatur dolor ad ullamco consectetur consequat ut ex officia.</p>
                                                        </div>
                                                    </div>
                                                    </React.Fragment> :null
                                                   
                                            }


                                            {
                                                this.state.sleeping ?
                                                    <React.Fragment>
                                                        <div className="card shadow animated jello" id="sleep-card">
                                                        <div className="card-header">
                                                            <img src={imgsleep} className="img-fluid" />
                                                        </div>
                                                        <div className="card-body">
                                                            <p>Est amet fugiat consectetur pariatur aliquip id eiusmod exercitation laborum velit enim ex do ut. Deserunt amet et aliqua voluptate nulla incididunt sint. Reprehenderit occaecat do quis ipsum quis elit veniam do. Quis qui Lorem sunt adipisicing cillum sint amet voluptate quis aliquip. Cupidatat aliquip dolor sit ad mollit aliqua do. Labore amet et nulla ipsum et ut est in. Pariatur dolor ad ullamco consectetur consequat ut ex officia.</p>
                                                        </div>
                                                    </div>
                                                    </React.Fragment>:null
                                                    
                                            }
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
export default Hobies;