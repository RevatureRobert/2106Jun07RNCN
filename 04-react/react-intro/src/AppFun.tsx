import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

const App: React.FC<any> = (props:any) => {
  // hooks
  // useState hook
  // let tup: [string, number, boolean];
  const [bear, setBear] = React.useState({
    name: 'yogi',
    location: 'yellowstone'
  });

  // useEffect is going to take the place of lifecycle methods in components
  // Warning: you should not update the state in this callback.
  useEffect(() => console.log(bear), [bear.name]);

  const changeName = (name:string) => {
    setBear({...bear, name});
  }

  return(<div>
    <h1>{props.hey}</h1>
    <p>{bear.name}</p>
    <button onClick={() => changeName('flinstone')}>Click me!!!</button>
  </div>);
}

export default App;
