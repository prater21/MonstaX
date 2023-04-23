import { Route, createBrowserRouter, RouterProvider, createRoutesFromElements } from 'react-router-dom';
import Layout from './components/UI/Layout';
import Home from './components/pages/Home';
import Album, { loader } from './components/pages/Album';
import 'bootstrap/dist/css/bootstrap.min.css';
import AlbumDetail from './components/pages/AlbumDetail';
import Shop from './components/pages/Shop';



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='/' element={<Home />} />
      <Route path='/album' element={<Album />} loader={loader} />
      <Route path='/album/:id' element={<AlbumDetail />} />
      <Route path='/shop' element={<Shop />} />
      <Route path='*' element={<Home />} />
    </Route>
  ), { basename: "/MonstaX" }
);

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App;
