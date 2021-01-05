import React from 'react'
import { Link } from 'react-router-dom';
import Search from './Search';
import "./SearchPage.css"
import {useStateValue} from "./StateProvider"
import useGoogle from './useGoogle';
import SearchIcon from '@material-ui/icons/Search';
import DescriptionIcon from '@material-ui/icons/Description';
import ImageIcon from '@material-ui/icons/Image';
import LocationOffIcon from '@material-ui/icons/LocationOff';
import RoomIcon from '@material-ui/icons/Room';
import MoreVertIcon from '@material-ui/icons/MoreVert';
function SearchPage() {
    const[{term},dispatch]=useStateValue();
    const { data}=useGoogle(term);
    console.log(data);
    return (
        <div className="searchpage">
            <div className="searchpage_header">
             <Link to="/">
             <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/368px-Google_2015_logo.svg.png" 
             alt="" className="searchpage_logo"/>
             </Link>
            <div className="searchpage_body">
              <Search hidebuttons/>
              <div className="searchpage_option">
                  <div className="searchpage_option_left">
                      <div className="searchpageop">
                          <SearchIcon/>
                          <Link to="/all">All</Link>
                      </div>
                      <div className="searchpageop">
                          <DescriptionIcon/>
                          <Link to="/news">News</Link>
                      </div>
                      <div className="searchpageop">
                          <ImageIcon/>
                          <Link to="/images">Images</Link>
                      </div>
                      <div className="searchpageop">
                          <LocationOffIcon/>
                          <Link to="/shopping">shopping</Link>
                      </div>
                      <div className="searchpageop">
                          <RoomIcon/>
                          <Link to="/map">maps</Link>
                      </div>
                      <div className="searchpageop">
                          <MoreVertIcon/>
                          <Link to="/more">more</Link>
                      </div>

                  </div>
                  <div className="searchpage_right">
                      <div className="seachpageop">
                          <Link to="/settings">Settings</Link>
                      </div>
                      <div className="seachpageop">
                          <Link to="/tools">Tools</Link>
                      </div>
                  </div>
              </div>
            </div> 
            </div>  
            {
                term && (
                    <div className="searchpage_results">
                    <p>
                        <div className="searchpage_resultcount">
                            About {data?.searchInformation.formattedTotalResults} formattedToatalResults
                            ({data?.searchInformation.formattedSearchTime} seconds)
                            for {term}
                        </div>
                        </p>
                        {
                            data?.items.map(item => (
                                
                                <div className="searchpage_result"> 
                                <a href={item.link}
                                style={{textDecoration:"none" , fontSize:"15px" , color:"gray"}}
                                >
                                {
                                    item.pagemap?.cse_image?.length>0 &&
                                    item.pagemap?.cse_image[0]?.src && (
                                        <img
                                            className="searchpage_imagee"
                                            src={
                                    item.pagemap?.cse_image[0]?.src 
                                            }
                                            alt=""
                                        />
                                    )
                                }
                                {
                                    item.displayLink
                                }
                                </a>
                                <a href={item.link} style={{textDecoration:"none" , fontSize:"27px"}}>
                                <div className="searchpage_resulttitle"
                                style={{textDecoration:"none"}}>
                                    {
                                        item.title
                                    }
                                </div>
                                </a>
                                <p className="snippet_result">
                                    {item.snippet}
                                </p>
                                </div>
                            ))
                        }
                    </div>
                )
            }
        </div>
    )
}

export default SearchPage
