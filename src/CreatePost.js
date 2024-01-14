import React, { useState } from 'react'
import { Navigate } from 'react-router-dom';


const CreatePost = () => {
    const [title, setTitle] = useState('');
    const [summary, setSummary] = useState('');
    const [redirect, setRedirect] = useState(false);

    async function createNewPost(ev) {

        ev.preventDefault();
        const response = await fetch("https://secret-room-backend.onrender.com/post",{
            method: 'POST',
            body: JSON.stringify({title,summary}),
            headers: {'Content-type' : 'application/json'},
            credentials: 'include',
        })

        if(response.ok){
            setRedirect(true);
        }
    }

    if (redirect) {
        return <Navigate to={'/'}/>
    }

    return (
        <>
        <div>
            <form onSubmit={createNewPost}>
                <div className="formbox m-auto max-width">
                    <h2>Share your Secret</h2>

                    <div className="forminput">
                        <input
                            type="title"
                            placeholder="Title"
                            value={title}
                            onChange={(e)=>{setTitle(e.target.value)}}
                        />
                    </div>

                    <div className="forminput">
                        <input
                            type="summary"
                            placeholder="Summary"
                            value={summary}
                            onChange={(e)=>setSummary(e.target.value)}
                        />
                    </div>
                   
                    <button className="btn2">Create Post</button>
                </div>
            </form>
        </div>
        </>
    )
}

export default CreatePost;
