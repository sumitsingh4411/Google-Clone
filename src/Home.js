import { Avatar } from '@material-ui/core'
import React from 'react'
import AppsIcon from '@material-ui/icons/Apps';
import { Link } from 'react-router-dom'
import "./Home.css"
import Search from './Search';
function Home() {
    return (
        <div className="home">
           <div className="home_header">
               <div className="home_header_left">
              <Link to="/about">About</Link>
              <Link to="./store">Store</Link>
               </div>
               <div className="home_header_right">
             <Link to="/gmail">Gmail</Link>
             <Link to="/images">Images</Link>
             <AppsIcon/>
             <Avatar/>
               </div>
           </div>
           <div className="home_body">
             <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/368px-Google_2015_logo.svg.png"
              alt="" className="home_logo"/>
           </div> 
           <div className="home_searchc">
               <Search hidebuttons/>
           </div>
        </div>
    )
}

export default Home
