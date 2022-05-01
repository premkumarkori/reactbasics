import './App.css';

function App() {
const title = 'Welcome to the React Basics';
const likes = 100;
const link ="https://github.com/"
//const person = {name: 'John', age:30}
  return (
    <div className="App">
      <h1>{ title }</h1>
      <p>Liked {likes} times</p>
    { /* <p>{ person}</p> */}
    <p>{ 100} </p>
    <p>{ "hello react" }</p>
    <p>{[ 1,2,3] }</p>
    <p>{Math.random()*9}</p>
    
    <a href={link} target="_blank" rel="noreferrer">Github</a>
    </div>
  );
}

export default App;
