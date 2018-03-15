import React from 'react';
import ReactDOM from 'react-dom';
import Operation from './operation.jsx';

// main component
class App extends React.Component {

   constructor(props) {
      super(props);
		
      this.state = {
         content: '....'
      }

      this.handleChange = this.handleChange.bind(this);
   };

   handleChange(event) {
      this.setState({content: "Entered content is: " + event.target.value});
   }

   render() {
       {/* Creates an Object to be passed to the component as props
           pure prop config*/}
      let operation = {
         content : this.state.content,
         handle_action : this.handleChange,
         heading : this.props.mainheading,
      }
      return (
         <div className="container">
		     {/* child component passed with 3 properties as spread*/}
            <Operation {...operation} />
         </div>
      );
   }
}

/* could also pass properties from the main component to the child component  */

ReactDOM.render(<App mainheading="Main Component"/>, document.getElementById('app'));