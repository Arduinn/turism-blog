import React from "react";
import "./styles.css"
import { Link } from "react-router-dom"

export default function Post({post: {id, title, body, imgUrl, author}, index}){
    return(
        <div className="post-container">
            <h2 className="post-title">{title}</h2>
            <h3 className="post-author">{author}</h3>
            <img className="post-img" src={imgUrl} alt="" />
            <p className="post-description">{body}</p>
            <div className="post-readbutton">
                <button>Read More</button>
            </div>
        </div>
    )
}
