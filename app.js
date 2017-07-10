import React from 'react';
import ReactDOM from 'react-dom';
import Operation from './operation.jsx';

// main component
class App extends React.Component {

   constructor(props) {
      super(props);
		
      this.state = {
         content: 'This would change....'
      }

      this.handleChange = this.handleChange.bind(this);
   };

   handleChange(event) {
      this.setState({content: event.target.value});
   }

   render() {
      return (
         <div className="container">
		     {/* child component passed with 3 properties */}
            <Operation prop1 = {this.state.content} prop2 = {this.handleChange} prop3= {this.props.mainContent} />
         </div>
      );
   }
}

// could also pass properties from the main componet to the child componet----
ReactDOM.render(<App mainContent="Main Component"/>, document.getElementById('app'));