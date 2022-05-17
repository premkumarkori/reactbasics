
import {useState} from "react"
const Create = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState('mario');

  const handleSubmit =(e) =>{
    e.preventDefault();
    const submitData= {title,body,author};
    console.log(submitData);
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
          <button>Add Blog</button>
        </form>
    </div>
  )
}

export default Create