
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Component/About/About';
import Auth$authtication from './Component/Authoriazation&authentication/Auth$authtication';
import Checkout from './Component/Checkout/Checkout';
import Login from './Component/Contract/Login';
import Resgister from './Component/Contract/Register/Resgister';
import RequireAuth from './Component/Contract/RequireAuth/RequireAuth';
import Firebase1 from './Component/Firebase1/Firebase1';
import Firebase2 from './Component/Firebase2/Firebase2';
import Home from './Component/Home/Home/Home';
import ServiceDetails from './Component/ServiceDetails/ServiceDetails';
import Header from './Component/Shared/Header/Header';
import NotFound from './Component/Shared/NotFound/NotFound';


function App() {
  return (
    <div >
      <Header sticky="top"></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/service/:serviceId' element={<ServiceDetails></ServiceDetails>}></Route>
         <Route path='/auth' element={<Auth$authtication></Auth$authtication>}></Route>
         <Route path='/firebase' element={<Firebase1></Firebase1>}></Route>
         <Route path="/firebase2" element={<Firebase2></Firebase2>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path="/checkout" element={
        <RequireAuth>
          <Checkout></Checkout>
        </RequireAuth>}>

        </Route>
        <Route path='/register' element={<Resgister></Resgister>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
         </Routes>
        
    </div>
  );
}

export default App;
