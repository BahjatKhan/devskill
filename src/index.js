import React from 'react';
import ReactDOM from 'react-dom';
import MyComponent from './MyComponent';

class App extends React.Component{
    state={
        fullName : 'Bahjat Khan',
        age : 26,
        profession : 'Software Engineer',
        }
        changeMessage(){
            this.setState({
                message:'Show Bio'
            });
        }
    render(){
            return(
                <MyComponent
                    name = {this.state.fullName}
                    age= {this.state.age}
                    profession={this.state.profession}
                    message = {this.state.changeMessage()}
                />


            );
    }



}

ReactDOM.render(<App/>,document.querySelector("#root"));
