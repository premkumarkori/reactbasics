import { useState,useEffect } from "react";
const useFetch = (url) =>{
 
    const [data,setData] = useState(null);
    const [isLoading,setIsLoading] = useState(true);
    const [error,setError] = useState(null);
    useEffect(()=>{
      setTimeout(()=>{
        fetch(url)
      .then(res=>{
        console.log(res);
        if(!res.ok){
          throw Error('Could not fetch data from server');
        }
        return res.json();
      })
      .then(data =>{
        console.log(data);
        setData(data); 
        setIsLoading(false);
        setError(null);
      })
      .catch(err => {
        setData(null);
        setIsLoading(false);
        setError(err.message)
      });
      },1000);
    },[url]);
    return {data,isLoading, error}
}

export default useFetch;