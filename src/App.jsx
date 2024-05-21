import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import RootLayout from './Components/CommonComponents/RootLayout/RootLayout';
import Home from './Pages/Home/Home';
import Shop from './Pages/Shop/Shop';
import ProductDetails from './Pages/ProductDetails/ProductDetails';
import Registration from './Pages/Registration/Registration';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<RootLayout/>}>
        <Route path='' element={<Home/>} />
        <Route path='/shop' element={<Shop/>} />
        <Route path='/productDetails/:id' element={<ProductDetails/>} />
      <Route path='/registration' element={<Registration />}></Route>
      </Route>,
    </Route>
  )
)
   

function App() {

  return (
    <RouterProvider router={router}>
      <Home/>
      <Shop/>
    </RouterProvider>
  )
}

export default App;
