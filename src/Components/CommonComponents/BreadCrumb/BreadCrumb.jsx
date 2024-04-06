import React from 'react'
import { Link , useLocation} from 'react-router-dom'

const BreadCrumb = () => {

  const location = useLocation()
  console.log(location);
  

  return (
    <>
     <div>
        <ul>
            <li> <Link to={'/'}>Home</Link> </li>
            <li> <Link to={'/shop'}>Shop</Link> </li>
        </ul>
     </div>
    </>
  )
}

export default BreadCrumb