import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import RootLayout from './Components/CommonComponents/RootLayout/RootLayout'
import Home from './Pages/Home/Home'
import Shop from './Pages/Shop/Shop'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout/>}>
      <Route path='' element={<Home/>} />
      <Route path='shop' element={<Shop/>} />
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

export default App
