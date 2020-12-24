import React from 'react';
import Story from './Story';
import './Posts.css';
function Posts() {
    return (
        <div className="posts">
            <div className="posts__story"><Story/></div>
        </div>
    )
}

export default Posts;
