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
            
            {/* <div className='text-[23px] text-black'><MdOutlineKeyboardArrowRight /></div>  */}
            <li className='flex items-center justify-center'> 
              {BreadCrumbPathname.map((path, index) => {
                const isLogDin = index === BreadCrumbPathname.length - 1;
                BreadCrumbList += `/${path}`
                
                return (
                  <li key={path}>
                  {isLogDin ? (
                    <Link   className={`${isLogDin ? "text-red-400" : "text-red-400" }`} >                    
                    <h1><span className='text-black ml-2 mr-1'>/</span> { path } </h1>
                    </Link>
                  ) : (
                    <Link   className={`${ isLogDin? "text-red-400" : "text-red-400"  }`} to={BreadCrumbList}>
                      <h1><span className='text-black ml-2 mr-1'>/</span> { path }</h1>
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