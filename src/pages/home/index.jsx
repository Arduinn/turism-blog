import React from "react";
import Posts from "../../components/posts"
import Sidebar from "../../components/sidebar"

export default function Home(){
    return(
        <div>
            <Posts />
            <Sidebar />
        </div>
    );
}