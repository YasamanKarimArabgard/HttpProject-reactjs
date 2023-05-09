import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getOnePost } from "../../services/getOnePost";

const SinglePost = () => {

    const [postValue, setPostValue] = useState(null);

    const postId = useParams();

    useEffect(() => {
        if (postId) {
            getOnePost(postId.id)
                .then((res) => setPostValue(res.data))
                .catch(error => console.log(error));
        }
    }, [postId])

    let postDetail = <p>select a post</p>;

    if (postId) postDetail = <p>loading...</p>

    if (postValue) {
        postDetail = (
            <div className="singlepost">
                <p>title: {postValue.title}</p>
                <p>content: {postValue.body}</p>
            </div>
        )
    }
    return postDetail;
}

export default SinglePost;