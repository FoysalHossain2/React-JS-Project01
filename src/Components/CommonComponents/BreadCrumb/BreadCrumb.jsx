import React from 'react'
import { Link , useLocation} from 'react-router-dom'
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const BreadCrumb = () => {

  const location = useLocation()
  const BreadCrumbPathname = location.pathname.split('/').filter((x) => x)

  return (
    <>
     <div>
        <ul className='flex items-center text-center gap-1'>
            <li> 
              <Link to={'/'}>Home</Link> 
            </li>
            <div className='text-[23px]'><MdOutlineKeyboardArrowRight /></div>
            <li> 
              {BreadCrumbPathname.map((path, index) => {
              const isList = index === BreadCrumbPathname.length - 1;

                return (
                  <Link className={`${isList === true ? 'text-gr-400' : 'text-pink-900'}`} to={'/'}> {path}</Link> 
                )
              })}
            </li>
        </ul>
     </div>
    </>
  )
}

export default BreadCrumb