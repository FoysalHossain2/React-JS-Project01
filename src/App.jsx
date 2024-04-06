import Home from './Pages/Home/Home'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import RootLayout from './Components/CommonComponents/RootLayout/RootLayout'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout/>}>
      <Route path='/' element={<Home/>} />
    </Route>
  )
)
   

function App() {

  return (
    <RouterProvider router={router}>
      <Home/>
    </RouterProvider>
  )
}

export default App
