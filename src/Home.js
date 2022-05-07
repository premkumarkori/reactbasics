import { useState,useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
 
  const [blogs,setBlog] = useState([
    { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
    { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
    { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
  ]);

  const [name,setName] =useState('Prem');
  const handleDelete= (id) => {
    const newBlog = blogs.filter(blog=>blog.id !==id);
    setBlog(newBlog);
  }
  useEffect(()=>{
    console.log('useEffect called');
    console.log(name);
  },[name]);
  return (
    <div className="Home">
      <BlogList blogs={blogs} title="My Blog Lists!" handleDelete={handleDelete}/>
      <p>{name}</p>
      <button onClick={()=>setName('Premkumar')}>Change Name</button>
    </div>
  )
}

export default Home