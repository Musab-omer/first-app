import React from "react";

class EmployeeCard extends React.Component{
    constructor(props){
        super(props);
        this.state={
            employees:[
                {
                    sno:"AAAA100",
                    fName:"Musab",
                    MName:'Mohammed',
                    lName:"Omer",
                    age:34,
                    designation:"Software Engineer",
                    address:"Cairo Egypt"
                },
                {
                    sno:"AAAA102",
                    fName:"Amna",
                    MName:'Abdallah',
                    lName:"Ahmed",
                    age:24,
                    designation:"Doctor",
                    address:"Khartoum Sudan"
                },
                {
                    sno:"AAAA103",
                    fName:"Mohammed",
                    MName:'Jaly',
                    lName:"Ali",
                    age:25,
                    designation:"Seels Manager",
                    address:"Dubai"
                }
            ]
        }
    }
    render(){
        return(
            <React.Fragment>
                <div className="container bg-info mt-3">
                    <div className="row">
                        <div className="col">
                            <ul className="list-group bg-light">
                                <li className="list-group-item">SNO :  {this.state.employees[0].sno}</li>
                                <li className="list-group-item">first Name : {this.state.employees[0].fName}</li>
                                <li className="list-group-item">Middle Name : {this.state.employees[0].MName}</li>
                                <li className="list-group-item">Age : {this.state.employees[0].age}</li>
                                <li className="list-group-item">designation : {this.state.employees[0].designation}</li>
                                <li className="list-group-item">address : {this.state.employees[0].address}</li>
                            </ul>

                            <ul className="list-group bg-light mt-3">
                                <li className="list-group-item">SNO :  {this.state.employees[1].sno}</li>
                                <li className="list-group-item">first Name : {this.state.employees[1].fName}</li>
                                <li className="list-group-item">Middle Name : {this.state.employees[1].MName}</li>
                                <li className="list-group-item">Age : {this.state.employees[1].age}</li>
                                <li className="list-group-item">designation : {this.state.employees[1].designation}</li>
                                <li className="list-group-item">address : {this.state.employees[1].address}</li>
                            </ul>

                            <ul className="list-group bg-light mt-3">
                                <li className="list-group-item">SNO :  {this.state.employees[2].sno}</li>
                                <li className="list-group-item">first Name : {this.state.employees[2].fName}</li>
                                <li className="list-group-item">Middle Name : {this.state.employees[1].MName}</li>
                                <li className="list-group-item">Age : {this.state.employees[2].age}</li>
                                <li className="list-group-item">designation : {this.state.employees[2].designation}</li>
                                <li className="list-group-item">address : {this.state.employees[2].address}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
export default EmployeeCard;