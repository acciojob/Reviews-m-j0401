
import React from "react";

const Reviews=(props)=>{
 let {id,name,job,image,text}=props.list;
    return <div  className="review">
        
        <p className="author">Author:{name}</p>
        <p className="job">Job:{job}</p>
        <img className="person-img" src={image} alt={name}></img>
        <p className="info"> Info:{text}</p>
    </div>

}

export default Reviews;