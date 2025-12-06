import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

/* function Car(){
  return(
    <h1 className='myClass'>Hello </h1>
  );
}
createRoot(document.getElementById('root')).render(
  <Car />
);*/

/* function Car(){
  const myfunc=()=>{
    alert('Hello World!........')
  }
  return(
    <button onClick={myfunc}>Click Me!</button>
  );
}
createRoot(document.getElementById('root')).render(
  <Car/>
); */

/* function Car(){
  const myfunc=()=>{
    alert('Hello World!........')
  }
  return(
    <button onClick={myfunc} disabled>Click Me!</button>
  );
}
createRoot(document.getElementById('root')).render(
  <Car/>
); */

/* function Car(){
  const myfunc=()=>{
    alert('Hello World!........')
  }
  return(
    <button onClick={myfunc} disabled={true}>Click Me!</button>
  );
}
createRoot(document.getElementById('root')).render(
  <Car/>
); */

/* function Car(){
  const myfunc=()=>{
    alert('Hello World!........')
  }
  return(
    <button onClick={myfunc} disabled={false}>Click Me!</button>
  );
}
createRoot(document.getElementById('root')).render(
  <Car/>
); */

// If statement

/* function Fruit(){
  const X = 5;
  let y = "Applle";
  if(X < 10){
    y = "Banana";
  }
  return(
    <h1>{y}</h1>
  );
}
createRoot(document.getElementById('root')).render(
  <Fruit/>
); */

// Props- 

/* function Car(Props){
  return(
    <h2>I have a {Props.color} car!</h2>
  );
}
createRoot(document.getElementById('root')).render(
  <Car color="red"/>
); */

// class component
/* class Car extends React.Component{
  constructor(){
    super();
    this.state={color:"red"};
  }
  render(){
    return(
      <h2>I have a {this.state.color} car!</h2>
    );
  }
}
createRoot(document.getElementById('root')).render(
  <Car />
); */

// component in component

class Car extends React.Component{
  render(){
    return(
      <h2>I have a {this.props.color} car!</h2>
    );
  }
}
createRoot(document.getElementById('root')).render(
  <Car color="red" />
);
class Garage extends React.Component{
  render(){
    return(
      <>
      <h1>Who lives in my garage?</h1>
      <Car color="red" />
      </> 
    );
  }
}
createRoot(document.getElementById('root')).render(
  <Garage />
);
