import React from "react";

class ContactCard extends React.Component {

    render() {
        let {picture,name,location,email,dob,phone}=this.props.customerDetails;
return (
    <React.Fragment>
        <div className="container mt-sm-3">
            <div className="row">
                <div className="col">
                    <div className="card">
                        <div className="card-header bg-secondary shadow text-center">
                            <img src={picture.large} className="  rounded-circle img-thumbnail" style={{marginTop:"-50px",border:"5px solid #8214b9"}} alt="" />
                        </div>
                        <div className="card-body bg-primary">
                            {/* <pre>{JSON.stringify(this.props.customerDetails)}</pre> */}
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item active card-title"><i className="fa fa-user"> Name :{name.first} {name.last}</i> </li>
                                <li className="list-group-item card-text"> <i className="fa fa-landmark"></i> Country :{location.country} </li>
                                <li className="list-group-item card-text"><i className="fa fa-envelope"></i> Email :{email} </li>
                                <li className="list-group-item card-text"><i className="fa fa-phone"></i> Phone :{phone} </li>
                                <li className="list-group-item card-text">Age :{dob.age} </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </React.Fragment>
);
    }
}
export default ContactCard;