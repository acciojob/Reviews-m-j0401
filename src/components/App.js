
import React, { useState } from "react";
import "../styles/App.css"

import reviews from "../data/reviewList"

import Revw from "./Reviews"
let ind=0
const App=()=>{
    
    let [data,setData]=useState(reviews[ind]);
   function movenext(){
       setIndex((prev) => (prev + 1) % reviews.length);
    }
    function moveback(){
        setIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
    }
    function randomMove()
    {
        let randomInd=parseInt(Math.random()*reviews.length);
        setData(reviews[randomInd]);
    }

    return <div className="review" id={`author-${ind+1}`}>
     <h1 id="review-heading">Our Reviews</h1>
    <button className="next-btn"  onClick={movenext}>Next</button>
    <button className="prev-btn"  onClick={moveback}>Previous</button>
    <button className="random-btn" onClick={randomMove}>surprise me</button>
    
    <Revw list={data}/>
    </div>

   
}
 export default App;
