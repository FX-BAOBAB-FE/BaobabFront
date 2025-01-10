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
import Use from './page/RegisterPage/AllAgreeDetail/Use';
import Identify from './page/RegisterPage/AllAgreeDetail/Identify';
import Wire from './page/RegisterPage/AllAgreeDetail/Wire';
import Certification from './page/RegisterPage/AllAgreeDetail/Certification';
import Collect from './page/RegisterPage/AllAgreeDetail/Collect';
const router = createBrowserRouter([
  {
    path:'/',
    element:<Header/>,
    
    children:[
      {index:true, element:<FinalMainPage/>},
      {path:'UsedGoodsDeal', element:<Final/>,},
      {path:'UsedGoodsDeal/:urlId', element:<DetailsBoxPage/>, },
      {path:'PlanPage', element:<FinalPlan/>},
      {path:'Calculate', element:<FinalPlan/>},
      {path:'Agree' , element:<AgreeFinal/>},
      {path:'Agree/Register', element:<RegisterFinal/>},
      {path:'Login', element:<LoginFinal/>},
    ],
  },
  {path:'Agree/register/use', element:<Use/>},
  {path:'Agree/register/identify', element:<Identify/>},
  {path:'Agree/register/wire', element:<Wire/>},
  {path:'Agree/register/certification', element:<Certification/>},
  {path:'Agree/register/collect',element:<Collect/>}
]);

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
