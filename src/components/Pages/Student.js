import React from "react";

class Student extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            name:"Musab",
            age:32,
            course:'Computer Scince',
            collage:'Osmaina University',
            Address: 'Hyderabad - india',
            image :'https://img.etimg.com/thumb/msid-96166534,width-300,height-225,imgsize-25818,,resizemode-75/shahrukh-khan-spotted-visiting-vaishno-devi-temple-after-performing-umrah-in-mecca.jpg'
        }
    }
    render() {
        return (
            <React.Fragment>
                <div className="container mt-3">
                    <div className="row">
                        <div className="col">
                            <div className="card bg-light">
                                <div className="card-header bg-secondary text-white">
                                    <p className="display-4">Student Details</p>
                                </div>
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-md-4 text-center">
                                            <img src={this.state.image} alt="Personal Image" className="img-fluid img-thumbnail"/>
                                        </div>
                                        <div className="col-md-8">
                                            <ul className="list-group">
                                                <li className="list-group-item">Name :<span className="font-weight-bold"> {this.state.name}</span></li>
                                                <li className="list-group-item">Age : <span className="font-weight-bold"> {this.state.age}</span></li>
                                                <li className="list-group-item">Course : <span className="font-weight-bold"> {this.state.course}</span></li>
                                                <li className="list-group-item">Collage :<span className="font-weight-bold"> {this.state.collage}</span></li>
                                                <li className="list-group-item">Address : <span className="font-weight-bold"> {this.state.Address}</span></li>
                                            </ul>
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
export default Student;