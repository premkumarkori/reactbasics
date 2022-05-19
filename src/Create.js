
import {useState} from "react"
import { useNavigate } from 'react-router-dom';

const Create = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState('mario');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit =(e) =>{
    e.preventDefault();
    const blogData= {title,body,author};

    fetch('http://localhost:8000/blogs/',{
      method: 'POST',
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(blogData)
    }).then(()=>{
      console.log('new blog data added successfully');
      setIsLoading(false);
      navigate('/');
    })
    
  }
  return (
    <div className="create">
        <h2>Add new Blog</h2>
        <form onSubmit={handleSubmit}> 
          <label>Blog Title</label>
          <input 
           type="text"
           required
           value ={title}
           onChange={(e) => setTitle(e.target.value)}
          />
          <label>Blog body</label>
          <textarea
          value={body}
          required
          onChange={(e)=>setBody(e.target.value)}
          ></textarea>
          <label>Blog author</label>
          <select  value={author}
          required
          onChange={(e)=>setAuthor(e.target.value)}>
            <option value="mario">mario</option>
            <option value="yoshi">yoshi</option>
          </select>
          { !isLoading && <button>Add Blog</button>}
          { isLoading && <button disabled>Adding...</button>}
        </form>
    </div>
  )
}

export default Create