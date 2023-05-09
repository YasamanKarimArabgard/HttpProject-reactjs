const NewPost = () => {
    return (
        <div className="newpost">
            <form className="m-1">
                <div className="m-1">
                    <label>title</label>
                    <input type="text"/>
                </div>
                <div className="m-1">
                    <label>content</label>
                    <input type="text"/>
                </div>
            </form>
            <button className="btn btn-primary">submit</button>
        </div>
    );
}
 
export default NewPost;