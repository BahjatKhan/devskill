import React from 'react';


class MyComponent extends React.Component{
  
   

    render(){
        
        return(
          
            <div>
                <h1>Short Bio</h1>
                <ul>
                    <li>Your Name : {this.props.name}</li>
                    <li>Your age : {this.props.age}</li>
                    <li>Your Profession : {this.props.profession}</li>
                </ul>
            <button onClick={this.props.message}>Hide bio</button>
            </div>


        );
    }
}

export default MyComponent;