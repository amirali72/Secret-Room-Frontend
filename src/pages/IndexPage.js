import React, { useEffect, useState } from 'react'
import Post from '../Post'
import LandingPage from "../LandingPage";
import Shimmer2 from '../Shimmer2';

const IndexPage = () => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        fetch('https://secret-room-backend.onrender.com/post').then(response => {
            response.json().then(posts => {
                setPosts(posts);
            });
        });
    }, []);

    return(posts.length===0)?<Shimmer2/>: (
        <main>
            <LandingPage />
            <div className='main-head max-width m-auto'>
            {posts.length > 0 && posts.map(post => (
                <Post {...post} />
            ))}
            </div>
        </main>
    )
}

export default IndexPage;
