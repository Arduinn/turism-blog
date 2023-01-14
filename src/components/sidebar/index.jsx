import React from "react"
import "./styles.css"

export default function Sidebar(){

    const eventsBlog = [
        {
            event: "Running in the Beach",
            dateEvent: "19/04/2023",

        },
        {
            event: "Walking in the Mountain",
            dateEvent: "25/04/2023",

        },
        {
            event: "Visiting the Lost City",
            dateEvent: "03/05/2023",

        },
        {
            event: "Swimming with Sharkes",
            dateEvent: "08/05/2023",

        },
    ];

    return(
        <div className="sidebar">
            <div className="sidebar-pharse">
                <span>The journey of a thousand miles begins with a single step</span>
            </div>
            <img className="sidebar-img" src="https://previews.123rf.com/images/rawpixel/rawpixel1803/rawpixel180301574/96684608-trekking-in-a-forest.jpg" alt="" />
            <hr />
            <div className="sidebar-events">
                {eventsBlog.map((events) => (
                    <div>
                        <h3>{events.event}</h3>
                        <h4>{events.dateEvent}</h4>
                        <br />
                    </div>
                ))}
            </div>
            <hr />
            <div className="sidebar-description">
                <p >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia nulla cumque nemo eveniet ex culpa voluptate necessitatibus commodi, voluptatibus dolores minus, quos dicta quisquam sint perspiciatis blanditiis repellat? Impedit, sed?</p>
            </div>
        </div>
    )
}