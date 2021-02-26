import logo from './logo.svg';
import './App.css';

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
  const nayoks = ['Manna', 'Illias', 'Salman']
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 style={{backgroundColor: "blue"}}>My heading</h1>
        <h5>testing cal:  {2+6} </h5>
        <p>My first react paragraph</p><br/>
        {/* <p>singer for to day {singer}</p> */}

        <h3>VVIP BD</h3>
        {/* <h5 className="actorColor">{actor.movieName} is having jhamela with {singer.fullName}</h5>
        <h5 style={styleAnotherWay}>One is {singer.age} years old and one is {person.age+actor.age} years old </h5> */}
        <Person name="Jolil Bhai" nayika="Barsha"></Person>
        <Person name="Scakib" nayika="Shobai"></Person>
        <Person name="BappaRazz" nayika=""></Person>
        <Person name="Misha Shoudagor" nayika="Maal"></Person>
        <Person name={nayoks[1]}></Person>
      </header>
    </div>
  );
}

function Person(props){
  console.log(props);
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

export default App;
