import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import RootLayout from './Components/CommonComponents/RootLayout/RootLayout';
import Home from './Pages/Home/Home';
import Shop from './Pages/Shop/Shop';
import ProductDetails from './Pages/ProductDetails/ProductDetails';
import Registration from './Pages/Registration/Registration';
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import Cart from './Pages/Cart/Cart';
import Contacts from './Pages/Contacts/Contacts';
import Login from './Pages/Login/Login';
import Checkout from './Pages/Checkout/Checkout';
import ErrorPage from './Components/CommonComponents/ErrorPage';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<RootLayout/>}>
        <Route path='' element={<Home/>} />
        <Route path='/shop' element={<Shop/>} />
        <Route path='/*' element={<ErrorPage />} />
        <Route path='/productDetails/:productId' element={<ProductDetails/>} />
        <Route path='/registration' element={<Registration />}></Route>
        <Route path='/cart' element={<Cart />} />
        <Route path='/contacts' element={<Contacts />} />
        <Route path='/login' element={<Login />} />
        <Route path='/checkout' element={<Checkout />} />
      </Route>,
    </Route>
  )
)
   

function App() {

  return (
    <>
    <ToastContainer />
    <RouterProvider router={router}>
    </RouterProvider>
    </>
  )
}

export default App;
