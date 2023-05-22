import SinglePost from '../Components/Posts/SinglePost';
import HomePage from '../Pages/HomePage';
import NewPost from '../Components/NewPost/NewPost';

const routes = [
    { id: 1, Path: '/', element: <HomePage /> },
    { id: 2, Path: '/newpost', element: <NewPost /> },
    { id: 3, Path: '/posts/:id', element: <SinglePost /> },
]

export default routes;