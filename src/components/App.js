
import React, { useState } from "react";
import "../styles/App.css"

import reviews from "../data/reviewList"

import Revw from "./Reviews"
let ind=0
const App=()=>{
    
    let [data,setData]=useState(reviews[ind]);
   function movenext(){
         if(ind<reviews.length-1)
            ind+=1
        setData(reviews[ind]);
    }
    function moveback(){
        if(ind>0)
        {
            ind-=1
            setData(reviews[ind]);
        }
    }
    function randomMove()
    {
        let randomInd=parseInt(Math.random()*reviews.length);
        setData(reviews[randomInd]);
    }

    return <div className="review">
     <h1 id="review-heading">Our Reviews</h1>
    <button className="prev-btn" onClick={movenext}>Previous</button>
    <button className="next-btn" onClick={moveback}>Next</button>
    <button className="random-btn" onClick={randomMove}>surprise me</button>
    
    <Revw list={data}/>
    </div>

   
}
 export default App;
