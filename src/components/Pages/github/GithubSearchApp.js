import React from "react";
import GitHubSearch from './github-profile/GithubSearch'
import GitHubProfile from './github-profile/GithubProfile';
import GithubRepos from './github-repo/GithubRepos'

class GithubSearchApp extends React.Component{
    constructor(props) {
        super(props);
        
    }

    render() {
        return (
            <React.Fragment>
                <GitHubSearch/>
               <GitHubProfile/>
               <GithubRepos/>
            </React.Fragment>
        );
    }
    
}
export default GithubSearchApp;