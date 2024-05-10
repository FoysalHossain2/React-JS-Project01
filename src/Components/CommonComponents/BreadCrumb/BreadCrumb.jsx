import React from 'react'
import { Link , useLocation} from 'react-router-dom'
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const BreadCrumb = () => {

  const location = useLocation()
  const BreadCrumbPathname = location.pathname.split('/').filter((x) => x)
  let BreadCrumbList = "";


  return (
    <>
     <div className='md:block hidden '>
        <ul className=' flex items-center text-center gap-1'>
            <li> 
              <Link to={'/'}>Home</Link> 
            </li>
            <div className='text-[23px]'><MdOutlineKeyboardArrowRight /></div>
            <li> 
              {BreadCrumbPathname.map((path, index) => {
                const isLogDin = index === BreadCrumbPathname.length - 1;
                BreadCrumbList += path
                
                return (
                  <li key={path}>
                  {isLogDin ? (
                    <Link
                      className={`${
                        isLogDin
                          ? "text-red-400"
                          : null
                      }`}
                    >
                     
                      {path}
                    </Link>
                  ) : (
                    <Link
                      to={`/${BreadCrumbList}`}
                      className={`${
                        isLogDin
                          ? "text-red-400"
                          : null
                      }`}
                    >
                      {path}
                    </Link>
                  )}
                </li>
              );
            })}
            </li>
        </ul>
     </div>
    </>
  )
}

export default BreadCrumb