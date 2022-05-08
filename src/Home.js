import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
  const { data: blogs, isLoading, error } = useFetch('http://localhost:8000/blogss');
  return (
    <div className="Home">
     { error && <div>{ error }</div>}
     { isLoading && <div>Loading...</div>}
     {blogs && <BlogList blogs={blogs} title="My Blog Lists!"/>} 
    </div>
  )
}

export default Home