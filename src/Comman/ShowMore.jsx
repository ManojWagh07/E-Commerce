import React,{useState} from 'react'
import Data from './Text';
function ShowMore(){
    const[showMore, setShowMore]=useState(false);
    const {text}=Data;
  return (
    <div className='App'>
        <h1>Show More/Less</h1>
        <h6>
            {showMore ? text : text.substring(0,25)}
            <button className='btn' onClick={()=>setShowMore(!showMore)}>
                {showMore ? "Show less" : "Show more"}
            </button>
        </h6>
    </div>
  )
}

export default ShowMore