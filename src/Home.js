import { useState } from "react";

const Home = () => {
  //let name ='Premkumar';
  const [name,setName] = useState('Premkumar');
  const [age,setAge] = useState(26);
  const handleClick = () =>{
    setName('Ram');
    setAge(27);
  }
  return (
    <div className="Home">
        <h2>HomePage</h2>
        <p>{name} is {age} years old</p>
        <button onClick={handleClick}>Clickme</button>
    </div>
  )
}

export default Home