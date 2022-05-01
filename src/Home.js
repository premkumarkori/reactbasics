const Home = () => {
  const handleClick = (e) =>{
    console.log('hello, welcome to blog',e)
  }
  const handleClickAgain = (name,e) =>{
    console.log('hello '+name,e.target);
  }
  return (
    <div className="Home">
        <h2>HomePage</h2>
        <button onClick={handleClick}>Clickme</button>
        <button onClick={(e)=> handleClickAgain('Premkumar',e)}>Clickme Again</button>
    </div>
  )
}

export default Home