import Header from '../Components/Header';
import './Layout.css'

const Layout = ({children}) => {
    return (
        <div className='layout col-12'>
            <Header/>
            {children}
        </div>
    );
};

export default Layout;