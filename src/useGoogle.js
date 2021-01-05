import React, { useEffect, useState } from 'react'
import API_KEYS from "./keys"
const CONTEXT_KEY="create your own context key form cse google search engine";
const useGoogle= (term) => {
     const[data,setdata]=useState(null);
     useEffect(()=>{
         const fetchdata=async ()=>{
             fetch(
                 ` https://www.googleapis.com/customsearch/v1?key=${API_KEYS}&cx=${CONTEXT_KEY}&q=${term}`
             ).then(res=>res.json())
             .then(result=>{
                 setdata(result)
             }).catch(error=>alert(error.message))
         }
         fetchdata();
     },[term])
     return {data}
}

export default useGoogle;
