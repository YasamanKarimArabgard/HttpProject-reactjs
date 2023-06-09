import LoadingButton from '../../utils/Loading/LoadingButton';

const Posts = ({ post, deleteHandler, loading }) => {

    return (
        <div className="post col-12 bg-white p-2 d-flex flex-column align-items-center justify-content-center border rounded">
            <h6>Title : {post.title}</h6>
            <p className="text-secondary">Content : {post.body}.</p>
            <button className={loading ? "btn btn-secondary w-50 mx-auto disabled" : "btn btn-danger w-50 mx-auto"} onClick={(e) => deleteHandler(e, post.id)}>
                {
                    loading ?
                        <LoadingButton /> :
                        'Delete'
                }
            </button>
        </div>
    );
}

export default Posts;