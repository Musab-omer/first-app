import React from "react";

class CarSelector extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            car: ''
        }
    }

    selectCar = (event) => {
        alert(event.currentTarget.value);
        this.setState(
            {
                car: event.currentTarget.value
            }
        );
    }
    render() {
        return (
            <React.Fragment>
                <div className="container mt-3">
                    <div className="row">
                        <div className="col">
                            <div className="card">
                                <div className="card-header bg-secondary text-white">
                                    <p className="h3">Car Selector</p>
                                </div>
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-md-8">
                                            <form>
                                                <div className="form-group">
                                                    <select className="form-control form-control-lg" 
                                                    onChange={this.selectCar}>
                                                        <option value="">Select Car</option>
                                                        <option value="BMW">BMW</option>
                                                        <option value="Adui">Adui</option>
                                                        <option value="KIA Seltos">KIA Seltos</option>
                                                        <option value="NEXA Baleno">NEXA Baleno</option>
                                                    </select>
                                                </div>
                                            </form>
                                        </div>
                                        <div className="col-md-4">
                                            <h2>{this.state.car}</h2>
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
export default CarSelector;