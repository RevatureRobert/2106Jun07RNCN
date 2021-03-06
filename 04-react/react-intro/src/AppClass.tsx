import React from "react";


class App extends React.Component<any, any> {
    // The first method called when creating a component, is the constructor
      constructor(props:any){
        super(props);
        // state has to be initialized inside the constructor
        this.state = {
            name: 'app'
        }
      }
  
      // After the constructor, the render method is called
      // This is also called after shouldComponentUpdate
      render() {
        return (<div>
          <h1>
            {this.props.hey}, {this.state.name}
          </h1>
          {/* You cannot alter the state directly, use the setState function to alter the state */}
          <button onClick={() => this.setState({name:'button'})}>click me!</button>
        </div>)
      }
  
      // After the render method, this method is called to run logic after mounting to the ui
      componentDidMount(){
        console.log("mounted");
      }
  
      // When properties are changed coming into the component, it needs to determine if it needs to be updated
      shouldComponentUpdate(){
        return true;
      }
  
      // run logic after it was updated
      componentDidUpdate(){
        console.log('updated');
      }
  
      // When it needs to be deleted from the ui
      componentWillUnmount(){
        console.log('unmounted');
      }
  
      // To handle errors in the ui
      componentDidCatch(){
        console.log('graceful error handling');
      }
  
  
  }
  
  export default App;