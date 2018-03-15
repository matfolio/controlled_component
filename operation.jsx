import React from 'react';


// Using the parent component states 
// in here through this component's props
// With this, This component could be 
// controlled through the input element 
class Operation extends React.Component {

   render() {
   	  let {...props} = this.props;
      return (
         <div>
         	<h1>{props.heading}</h1>
            <input type ="text" onChange={props.handle_action} />
            <h3>{props.content}</h3>
         </div>
      );
   }
}
export default Operation;