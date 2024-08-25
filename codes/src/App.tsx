import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Final from './component/MainPage/Final';
import Header from './component/HeaderList/Header';
import ErrorOccured from './component/ErrorPage/ErrorOccured';
import DetailsBoxPage from './component/MainPage/DetailsPage/DetailsBoxPage';
import { Provider } from 'react-redux';
import store from './component/reduxData/dataProducer';

const router = createBrowserRouter([
  {
    path:'/',
    element:<Header/>,
    errorElement: <ErrorOccured/>,
    children:[
      {path:'/', element:<Final/>},
      {path:'/box/:urlId', element:<DetailsBoxPage/>}
    ]
  }]);

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
