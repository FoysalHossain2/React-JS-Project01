import React from 'react'

const Loading = ({className, PageChange}) => {
    console.log(PageChange);
  return (
    <>
    <div className='flex items-center flex-wrap'>
        {[...new Array(PageChange).map((_, index) => index)].map((item) => (
           <div
            className={`${className ? className : "w-[32%]"} rounded-md border border-blue-100 p-4 shadow`}
             key={item + ""}
           >
             <div key={item + ""}>
               <div className="relative h-[450px] w-full animate-pulse rounded-lg bg-gray-200">
                 <div className=" my-4 flex h-full animate-pulse flex-col items-center justify-center gap-y-5">
                   <div className=" h-3 w-[80%]  rounded-md bg-gray-500 py-3"></div>
                   <div className="  h-3 w-[80%]  rounded-md bg-gray-400 py-3"></div>
                   <div className="  h-3 w-[80%]  rounded-md bg-gray-300 py-3"></div>
                 </div>
               </div>
             </div>
           </div>
        ))}
    </div>
    </>
  )
}

export default Loading