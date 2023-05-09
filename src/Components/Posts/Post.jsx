const Posts = ({ post , deleteHandler}) => {

    return (
        <div className="post col-12 bg-white p-2 m-1 d-flex flex-column align-center justify-center border rounded">
            <p>titile: {post.title}</p>
            <p>content: {post.body}</p>
            <button className="btn btn-danger w-50 mx-auto" onClick={(e) => deleteHandler(e, post.id)}>delete</button>
        </div>
    );
}

export default Posts;