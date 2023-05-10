import { useState } from "react";
import { postNewComments } from '../../services/postNewComments';
import { useNavigate } from "react-router-dom";

const NewPost = () => {

    const [comment, setComment] = useState({
        title: '',
        content: ''
    });

    const navigate = useNavigate();

    const commentChangeHandler = (e) => {
        setComment({ ...comment, [e.target.name]: e.target.name })
    }

    const addNewComment = async () => {
        try {
            await postNewComments({ ...comment, postId: 7 });
            navigate('/');
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="newpost">
            <form className="m-1">
                <div className="m-1 d-flex">
                    <label className="mx-1">title : </label>
                    <input className="form-control w-25" type="text" onChange={(e) => commentChangeHandler(e)} name='title' />
                </div>
                <div className="m-1 d-flex">
                    <label className="mx-1">content : </label>
                    <input className="form-control w-25" type="text" onChange={(e) => commentChangeHandler(e)} name='content' />
                </div>
            </form>
            <button className="btn btn-primary m-2" onClick={() => addNewComment()}>submit</button>
        </div>
    );
}

export default NewPost;