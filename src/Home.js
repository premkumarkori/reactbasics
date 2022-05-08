import { useState,useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
 
  const [blogs,setBlog] = useState(null);
  const [isLoading,setIsLoading] = useState(true);
  const [name,setName] =useState('Prem');
  const [error,setError] = useState(null);
  useEffect(()=>{
    setTimeout(()=>{
      fetch('http://localhost:8000/blogs')
    .then(res=>{
      console.log(res);
      if(!res.ok){
        throw Error('Could not fetch data from server');
      }
      return res.json();
    })
    .then(data =>{
      console.log(data);
      setBlog(data); 
      setIsLoading(false);
      setError(null);
    })
    .catch(err => {
      setIsLoading(false);
      setError(err.message)
    });
    },1000);
  },[]);
  return (
    <div className="Home">
     { error && <div>{ error }</div>}
     { isLoading && <div>Loading...</div>}
     {blogs && <BlogList blogs={blogs} title="My Blog Lists!"/>} 
    </div>
  )
}

export default Home