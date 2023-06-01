import React from "react";

class GithubSearch extends React.Component{
    constructor(props) {
        super(props);
        
    }

    render() {
        return (
            <React.Fragment>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <form>
                              <div className="form-group form-inline">
                                <input type="text" placeholder="GitHub User Name" className="form-control" />
                                <button className="btn btn-primary">search</button>
                              </div>
                            </form>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
    
}
export default GithubSearch;