import SinglePost from '../Components/Posts/SinglePost';
import HomePage from '../Pages/HomePage';
import NewPost from '../Components/NewPost/NewPost';

const routes = [
    { Path: '/', element: <HomePage /> },
    { Path: '/newpost', element: <NewPost/> },
    { Path: '/posts/:id', element: <SinglePost /> },
]

export default routes;