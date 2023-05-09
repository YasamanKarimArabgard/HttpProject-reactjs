import { BrowserRouter, Route, Routes } from 'react-router-dom';
import routes from './Routes/routes.jsx';
import Layout from './Layout/Layout';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          {
            routes.map((route, index) => (
              <Route path={route.Path} element={route.element} key={index} />
            ))
          }
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
