import React from "react";
import './MessageCard.css';

class MessageCard extends React.Component{
    render(){
        let cardStyle={
            backgroundColor:'orange',
            color:'white'
        };
        return(
           
            <div>
                   <h1 style={{color:'red',backgroundColor:'lightgreen'}}>I am from MessageCard Component with inline style</h1>
                   <h1 style={cardStyle}>I am from MessageCard Component with internal style</h1>
                   <h1 id="h1Demo">I am form MessageCard Component with external style</h1>
                   <h1 className="custom">I am from MessgeCard Component</h1>
            </div>
        );
    }
}
export default MessageCard;