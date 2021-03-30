import React, {Component} from 'react';

class Plant extends React.Component {
 constructor(props){
     super(props);
     this.state ={type:"Flowering plant"}
 };


render () {
    return(
        <div>
            <h1>This is a Plant Component!</h1>
        </div>
    );
}
}
export default Plant;