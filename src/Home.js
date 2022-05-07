import { useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs,setBlog] = useState([
    { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
    { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
    { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
  ]);
  return (
    <div className="Home">
      <BlogList blogs={blogs} title="My Blog Lists!"/>
      <BlogList blogs={blogs.filter((blog) => blog.author === 'mario')} title="Mario's Blog Lists!"/>
    </div>
  )
}

export default Home