import React from 'react';


// Using the parent component states 
// in here through this component's props
// With this, This component could be 
// controlled through the input element 
class Operation extends React.Component {

   render() {
      return (
         <div>
         	<h1>{this.props.prop3}</h1>
            <input type ="text" onChange={this.props.prop2} />
            <h3>{this.props.prop1}</h3>
         </div>
      );
   }
}
export default Operation;