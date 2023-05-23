import React, { useEffect, useState } from 'react';
import { getAllPosts } from '../../services/getAllPosts';
import { deletePost } from '../../services/deletePost';
import Post from '../../Components/Posts/Post';
import LoadingSkeleton from '../../utils/Loading/LoadingSkeleton';
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';

const Discussion = () => {

    const [posts, setPosts] = useState(null);
    const [loading, setLoading] = useState(false);

    const deleteMessage = () => toast.error('The post was deleted!', {
        position: toast.POSITION.TOP_CENTER,
        closeOnClick: true,
        theme: "light",
        autoClose: 3000
    })

    useEffect(() => {
        const GetPosts = async () => {
            try {
                const { data } = await getAllPosts();
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
        setLoading(true);
        try {
            await deletePost(e, postId)
            const newData = posts.filter(p => p.id !== postId);
            setPosts(newData);
            setLoading(false);
            deleteMessage();
        } catch (error) {
            // console.log(error);
        }
    }

    return (
        <main className='col-12 mt-4 d-flex flex-column flex-wrap align-items-center'>
            <h1 className='py-2'>Posts</h1>
            <div className='col-12 d-flex flex-wrap justify-content-center mt-3'>
            <ToastContainer />
                {!posts ?
                    <LoadingSkeleton /> :
                    posts.map(post => (
                        <Link to={`posts/${post.id}`} key={post.id} className='col-11 col-sm-6 col-md-3 m-1 text-black d-flex justify-content-center' style={{ textDecoration: 'none' }}>
                            <Post post={post} deleteHandler={deleteHandler} loading={loading} />
                        </Link>
                    ))
                }
            </div>
        </main>
    );
};

export default Discussion;


