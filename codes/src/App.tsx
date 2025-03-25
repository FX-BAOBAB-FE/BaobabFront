import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Final from './page/UsedGoods/Final';
import Header from './component/HeaderList/Header';
import ErrorOccured from './page/ErrorPage/ErrorOccured';
import DetailsBoxPage from './component/UsedGoods/DetailsPage/DetailsBoxPage';
import { Provider } from 'react-redux';
import store from './component/reduxData/index';
import FinalMainPage from './page/MainPage/FinalMainPage';
import FinalPlan from './page/PlanPage/FinalPlan';
import FinalCal from './page/CalPage/FinalCal';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import AgreeFinal from './page/RegisterPage/AgreeFinal';
import LoginFinal from './page/LoginPage/LoginFinal';
import RegisterFinal from './page/RegisterPage/RegisterFinal';
import SuccessFinal from './page/RegisterPage/SuccessPage/SuccessFinal';
import RegistFinal from './page/UsedGoods/GoodsRegist/RegistFinal';
import { Loader as GoodsLoader } from './component/UsedGoods/BoxList';
import { Loader as SlidLoader } from './component/UsedGoods/DetailsPage/ImgSilder/SildImg';
const router = createBrowserRouter([
  {
    path:'/',
    element:<Header/>,
    children:[
      {index:true, element:<FinalMainPage/>},
      {path:'/UsedGoodsDeal', element:<Final/>, loader:GoodsLoader},
      {path:'/UsedGoodsDeal/:urlId', element:<DetailsBoxPage/>, loader:SlidLoader},
      {path:'PlanPage', element:<FinalPlan/>},
      {path:'Calculate', element:<FinalPlan/>},
      {path:'Agree' , element:<AgreeFinal/>},
      {path:'Agree/Register', element:<RegisterFinal/>},
      {path:'Login', element:<LoginFinal/>},
      {path:'Agree/Register/Success', element:<SuccessFinal/>},
      {path:'regist', element:<RegistFinal/>}
    ]
  }]);

export let persistor = persistStore(store);
function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RouterProvider router={router} />
      </PersistGate>
    </Provider>
  );
}

export default App;
