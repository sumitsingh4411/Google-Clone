import { Button} from '@material-ui/core'
import React, { useState } from 'react'
import "./Search.css"
import SearchIcon from '@material-ui/icons/Search';
import MicIcon from '@material-ui/icons/Mic';
import { useHistory } from 'react-router-dom';
import {useStateValue} from "./StateProvider"
import {actionTypes} from "./reducer"
function Search({hidebuttons=false}) {
    const[input,setinput]=useState('');
    const history=useHistory();
    const[{},dispatch]=useStateValue();
    const search=(e)=>{
        dispatch({
            type:actionTypes.SET_SEARCH_TERM,
            term:input
        })
        e.preventDefault();
        setinput('');
        history.push('/search');
    }
    return (
        <form className="search">
        <div className="search_input">
            <SearchIcon className="search_inputicon"/>
            <input
                value={input}
                onChange={(e)=>setinput(e.target.value)}
            />
            <MicIcon/>
        </div>
        {
            hidebuttons ? (
                <div className="search_button">
            <Button type="submit" onClick={search} variant="outlined">Google Search</Button>
            <Button variant="outlined">I'm feeling Lucky</Button>
               </div>
            ):
            (
                <div className="search_but">
            <Button className="search_buttonhidden" type="submit" onClick={search} variant="outlined">Google Search</Button>
            <Button className="search_buttonhidden" variant="outlined">I'm feeling Lucky</Button>
               </div>
            )
        }
      
        </form>
    )
}

export default Search
