import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  // var person= {
  //   name: "Kudus",
  //   age: 20,
  // }
  // var singer = {
  //   fullName: "Hero Alam",
  //   age: 30,
  //   medium: "facebook"
  // }
  // var actor = {
  //   movieName: "Jolil Bhai",
  //   age: 40,

  // }

  // var styleAnotherWay = {
  //   backgroundColor: 'goldenrod'
  // }
  const nayoks = ['Manna', 'Illias', 'Salman', 'Alomgir','Bappi', 'Samrat','Sakib'];
  const products = [
    {name: 'Photoshop', price: '$90.69'},
    {name: 'Illustrator', price: '$70.15'},
    {name: 'PDF', price: '$8.25'},
  ];
  // const nayokNames = nayoks.map(nayok => nayok);
  // console.log(nayokNames);
  const productNames = products.map(product => product.name);
  console.log(productNames);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 style={{backgroundColor: "blue"}}>My heading</h1>
        <h5>testing cal:  {2+6} </h5>
        <p>My first react paragraph</p><br/>
        <Counter></Counter>
        {/* <p>singer for to day {singer}</p> */}

        <h3>VVIP BD</h3>
        {/* <h5 className="actorColor">{actor.movieName} is having jhamela with {singer.fullName}</h5>
        <h5 style={styleAnotherWay}>One is {singer.age} years old and one is {person.age+actor.age} years old </h5> */}
        <Person name="Jolil Bhai" nayika="Barsha"></Person>
        <Person name="Scakib" nayika="Shobai"></Person>
        <Person name="BappaRazz" nayika=""></Person>
        <Person name="Misha Shoudagor" nayika="Maal"></Person>
        <Person name={nayoks[1]}></Person>

        <Product product={products[0]}></Product>
        <Product product={products[1]}></Product>
        <Product product={products[2]}></Product>

        <ul>
          {
            nayoks.map(nayok => <li>{nayok}</li>)
          }
          {
            products.map(product=> <li>{product.name}--Price--{product.price}</li>)
          }
          {
            products.map(pd => <Product product={pd}></Product>)
          }
        </ul>
      </header>
    </div>
  );
}

function Product(props){
  const productStyle={
    border: '1px solid gray',
    borderRadius: '5px',
    backgroundColor: 'goldenrod',
    height: '200px',
    width: '200px',
    float: 'left',
    margin: '20px',
    padding: '10px'
    // boxSizing: 'border-box',
    // float: 'left',
    // width: '33.33%',
    // padding: '50px',
  }
  const {name, price} = props.product;
  return(
    <div style={productStyle}>
      <h2>{name}</h2>
      <h3>{price}</h3>
      <button>Buy Now</button>
    </div>
  )
}

function Person(props){
  // console.log(props);
  return (
    <div style={{
      backgroundColor: "green",
      border: "2px solid black",
      margin: "10px",
      padding: "10px"
      }}>
      <h3>Name: {props.name}</h3>
      <h5>Hero of {props.nayika}</h5>
    </div>
  )
}

function Counter(){
  const [count, setCount] = useState(0);
  const handleIncrease = () => {
    // const newCount = count + 1;
    // setCount(newCount);
    setCount(count + 1);
  }
  return(
    <div>
      <h3>Count: {count}</h3>
      <button onClick={() => setCount(count-1)}>Decrease</button>
      <button onClick={handleIncrease}>Increase</button>
    </div>
  )
}

function Users(){
  return(
    <div>
      <h3>Dynamic User: </h3>
    </div>
  )
}

export default App;
