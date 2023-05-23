import { useState } from "react";
import { postNewComments } from '../../services/postNewComments';
import { ToastContainer, toast } from "react-toastify";
import LoadingButton from '../../utils/Loading/LoadingButton'
import 'react-toastify/dist/ReactToastify.css';

const NewPost = () => {

    const [comment, setComment] = useState({
        title: '',
        content: ''
    });

    const [btnLoading, setBtnLoading] = useState(null)

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
        setBtnLoading(true);
        if (comment.title.trim().length || comment.content.trim().length !== 0) {
            try {
                await postNewComments({ ...comment, postId: 7 });
                setBtnLoading(false);
                successMessage();
                setComment({ title: '' , content : ''});
            } catch (error) {
                console.log(error);
            }
        } else {
            setBtnLoading(false);
            errorMessage();
        }
    }

    return (
        <div className="newpost col-12 d-flex justify-content-center align-items-center flex-column">
            <ToastContainer />
            <h4 className="text-info">Add New Post</h4>
            <div className="col-10 col-sm-6 col-md-4 border border-info rounded p-2 mt-3 d-flex flex-column align-items-center">
                <form className="col-12 my-1">
                    <div className="col-12 my-1 d-flex flex-column">
                        <label className="mx-1 h6">Title : </label>
                        <input className="form-control w-100"
                            type="text"
                            onChange={(e) => commentChangeHandler(e)}
                            name='title'
                            placeholder="Enter title"
                            value={comment.title} />
                    </div>
                    <div className="col-12 my-1 d-flex flex-column">
                        <label className="mx-1 h6">Content : </label>
                        <textarea className="form-control w-100"
                            type="text"
                            onChange={(e) => commentChangeHandler(e)}
                            name='content'
                            placeholder="Enter text"
                            rows={3}
                            value={comment.content}/>
                    </div>
                </form>
                <button className={ btnLoading ? "btn btn-secondary m-2 w-25" : "btn btn-primary m-2 w-25"} onClick={(e) => addNewComment(e)}>
                    {
                        btnLoading ?
                            <LoadingButton /> :
                            'Submit'
                    }
                </button>
            </div>
        </div>
    );
}

export default NewPost;