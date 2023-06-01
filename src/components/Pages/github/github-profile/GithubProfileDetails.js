import React from "react";

class GithubProfileDetails extends React.Component{
    constructor(props) {
        super(props);
        
    }

    render() {
        return (
            <React.Fragment>
               <div className="pb-3">
               <span className="badge badge-info mr-2">1665 Followers</span>
               <span className="badge badge-success mr-2">18 Repos</span>
               <span className="badge badge-danger mr-2">58 Gists</span>
               <span className="badge badge-warning">1 Following</span>
               </div>
               <ul className="list-group">
                <li className="list-group-item">User Name : </li>
                <li className="list-group-item">Location : </li>
                <li className="list-group-item">Email : </li>
                <li className="list-group-item">Compnay : </li>
                <li className="list-group-item">Blog : </li>
                <li className="list-group-item">Member Since : </li>
                <li className="list-group-item">Profile URL : </li>
               </ul>
            </React.Fragment>
        );
    }
    
}
export default GithubProfileDetails;