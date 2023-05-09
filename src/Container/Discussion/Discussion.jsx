import React, { useEffect, useState } from 'react';
import { getAllPosts } from '../../services/getAllPosts';
import { deletePost } from '../../services/deletePost';
import Post from '../../Components/Posts/Post';
import { Link } from 'react-router-dom';

const Discussion = () => {

    const [posts, setPosts] = useState(null);

    useEffect(() => {
        const GetPosts = async () => {
            try {
                const { data } = await getAllPosts();
                setPosts(data.slice(0, 6));
            } catch (error) {
                console.log(error);
            }
        }
        GetPosts();
    }, [])

    const deleteHandler = async (e, postId) => {
        e.preventDefault();
        e.stopPropagation(); 
        const deletedPost = posts.filter(post => post.id !== postId);
        setPosts(deletedPost);
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


