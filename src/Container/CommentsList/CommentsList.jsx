import React, { useEffect, useState } from 'react';
import { getAllPosts } from '../../services/getAllPosts';
import { deletePost } from '../../services/deletePost';
import Post from '../../Components/Posts/Post';
import { Link } from 'react-router-dom';

const Discussion = () => {

    const [posts, setPosts] = useState(null);

    // console.log(posts);

    useEffect(() => {
        const GetPosts = async () => {
            try {
                const { data } = await getAllPosts();
                // console.log(data);
                setPosts(data.slice(0, 6));
            } catch (error) {
                // console.log(error);
            }
        }
        GetPosts();
    }, [])

    const deleteHandler = async (e, postId) => {
        e.preventDefault();
        e.stopPropagation();
        try {
            await deletePost(e, postId)
            const newData = posts.filter(p => p.id !== postId);
            setPosts(newData)
        } catch (error) {
            // console.log(error);
        }
    }

    return (
        <main className='col-12 mt-4 d-flex flex-wrap'>
            {!posts ?
                <p className='text-warning mt-2'>loading...</p> :
                posts.map(post => (
                    <Link to={`posts/${post.id}`} key={post.id} className='col-2 m-1 text-black' style={{ textDecoration: 'none' }}>
                        <Post post={post} deleteHandler={deleteHandler} />
                    </Link>
                ))
            }
        </main>
    );
};

export default Discussion;

