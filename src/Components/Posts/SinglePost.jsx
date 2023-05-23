import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getOnePost } from "../../services/getOnePost";
import LoadingSingleSkeleton from '../../utils/Loading/LoadingSingleSkeleton';
import { useNavigate } from "react-router-dom";

const SinglePost = () => {

    const [postValue, setPostValue] = useState(null);

    const postId = useParams();
    const navigate = useNavigate()

    useEffect(() => {
        if (postId) {
            getOnePost(postId.id)
                .then((res) => setPostValue(res.data))
                .catch(error => console.log(error));
        }
    }, [postId])

    let postDetail = '';

    if (postId) postDetail = <LoadingSingleSkeleton />

    if (postValue) {
        postDetail = (
            <div className="singlepost-container col-12 d-flex flex-column align-items-center mt-5">
                <div className="border border-info rounded p-2 col-10 col-sm-3 col-md-6 py-3">
                    <p className="h6 mb-2">title : {postValue.title}</p>
                    <p className="text-secondary">content : {postValue.body}</p>
                </div>
                <button type="button" className="btn btn-info text-white mx-auto mt-3" onClick={() => navigate('/')}>Back home</button>
            </div>
        )
    }
    return postDetail;
}

export default SinglePost;