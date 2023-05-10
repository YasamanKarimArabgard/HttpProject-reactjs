import { useState } from "react";
import { postNewComments } from '../../services/postNewComments';
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const NewPost = () => {

    const [comment, setComment] = useState({
        title: '',
        content: ''
    });

    const navigate = useNavigate();

    const commentChangeHandler = (e) => {
        setComment({ ...comment, [e.target.name]: e.target.value })
    }

    const errorMessage = () => toast.warning('Your input is empty', {
        position: toast.POSITION.TOP_CENTER,
        closeOnClick: true,
        theme: "light",
        autoClose: 3000
    })

    const successMessage = () => toast.success('Your new comment added successfuly!', {
        position: toast.POSITION.TOP_CENTER,
        closeOnClick: true,
        theme: "light",
        autoClose: 3000
    })


    const addNewComment = async (e) => {
        e.preventDefault();

        if (comment.title.trim().length || comment.content.trim().length !== 0) {
            try {
                await postNewComments({ ...comment, postId: 7 });
                successMessage();
            } catch (error) {
                console.log(error);
            }
        } else {
            errorMessage();
        }
    }

    return (
        <div className="newpost col-12 d-flex justify-content-center align-items-center flex-column">
            <ToastContainer />
            <h4>Add New Post</h4>
            <div className="col-10 col-sm-6 col-md-4 border border-seconadry rounded p-2 mt-3">
                <form className="col-12 m-1">
                    <div className="col-12 m-1 d-flex flex-column">
                        <label className="mx-1">Title : </label>
                        <input className="form-control w-75"
                            type="text"
                            onChange={(e) => commentChangeHandler(e)}
                            name='title'
                            placeholder="title" />
                    </div>
                    <div className="col-12 m-1 d-flex flex-column">
                        <label className="mx-1">Content : </label>
                        <input className="form-control w-75"
                            type="text"
                            onChange={(e) => commentChangeHandler(e)}
                            name='content'
                            placeholder="content" />
                    </div>
                </form>
                <button className="btn btn-primary m-2 w-25" onClick={(e) => addNewComment(e)}>submit</button>
            </div>
        </div>
    );
}

export default NewPost;