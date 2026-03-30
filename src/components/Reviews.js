
import React from "react";

const Reviews=(props)=>{
 let {id,name,job,image,text}=props.list;
    return <div >
        {console.log("author-id",{id})}
        <p className="author" id={`author-${id}`}>Author:{name}</p>
        <p className="job">Job:{job}</p>
        <img className="person-img" src={image} alt={name}></img>
        <p className="info"> Info:{text}</p>
    </div>

}

export default Reviews;