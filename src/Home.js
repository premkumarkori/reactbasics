import { useState,useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
 
  const [blogs,setBlog] = useState(null);
  const [isLoading,setIsLoading] = useState(true);
  const [name,setName] =useState('Prem');
  useEffect(()=>{
    setTimeout(()=>{
      fetch('http://localhost:8000/blogs')
    .then(res=>{
      return res.json();
    })
    .then(data =>{
      console.log(data);
      setBlog(data); 
      setIsLoading(false);
    });
    },2000);
  },[]);
  return (
    <div className="Home">
     { isLoading && <div>Loading...</div>}
     {blogs && <BlogList blogs={blogs} title="My Blog Lists!"/>} 
    </div>
  )
}

export default Home