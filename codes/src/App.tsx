import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Final from './component/UsedGoods/Final';
import Header from './component/HeaderList/Header';
import ErrorOccured from './component/ErrorPage/ErrorOccured';
import DetailsBoxPage from './component/UsedGoods/DetailsPage/DetailsBoxPage';
import { Provider } from 'react-redux';
import store from './component/reduxData/dataProducer';
import FinalMainPage from './component/MainPage/FinalMainPage';
import { Loader as ImgLoader } from './component/UsedGoods/DetailsPage/ImgSilder/ShowImg';
const router = createBrowserRouter([
  {
    path:'/',
    element:<Header/>,
    errorElement: <ErrorOccured/>,
    children:[
      {index:true, element:<FinalMainPage/>},
      {path:'/UsedGoodsDeal', element:<Final/>,},
      {path:'/UsedGoodsDeal/:urlId', element:<DetailsBoxPage/>, loader:ImgLoader}
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
