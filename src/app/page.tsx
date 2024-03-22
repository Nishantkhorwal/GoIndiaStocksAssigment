'use client'
import React , {use, useState} from 'react'
import { CgProfile } from "react-icons/cg";
import { FaBell } from "react-icons/fa6";
import { BiMessageDetail } from "react-icons/bi";
import { FaCaretDown } from "react-icons/fa";
import { HiCurrencyDollar } from "react-icons/hi2";
import { FaCaretRight } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { IoEyeSharp } from "react-icons/io5";
import { LiaComments } from "react-icons/lia";
import { IoShareSocial } from "react-icons/io5";


const page = () => {
  const [open,setOpen] = useState(false);
  const[show,setShow]= useState(false);
  const[shows,setShows]= useState(false);
  return (
    <>
      <div className='flex '>
        <div className={`bg-blue-950 duration-300 absolute z-10 text-white h-screen md:h-[800px]  flex flex-col ${open ? 'translate-x-0': '-translate-x-full'}`}>
          <div className='flex col-span-1 h-6 px-2 py-4'>
            <div className='px-2 mt-1'><CgProfile /></div>
            <p className='ps-1 text-sm pt-1'>Hello,user</p>
            <div className='ps-20 pr-2 mt-1'><FaBell />
            </div>
          </div>
          <hr className='text-gray-400 h-6 max-w-full p-0 mt-6'></hr>
          <div className='flex col-span-1 h-fit px-2 py-4'>
            <div className='px-2 mt-1'><BiMessageDetail /></div>
            <p className='ps-1 text-sm '>Discussion Fourm</p>
            <div className='ps-16 pr-2 '><FaCaretDown /></div>
          </div>
          <div className='flex col-span-1 h-fit px-2 py-4'>
            <div className='px-2 mt-1'><HiCurrencyDollar /></div>
            <p className='ps-1 text-sm '>Marked Stories</p>
            <div className='ps-20 pr-2'><FaCaretDown /></div>
          </div>
          <div className='h-fit flex flex-col ps-11'>
            <ul className=''>
              <li className='pb-4'>Sentiments</li>
              <li className='pb-4'>Market</li>
              <li className='pb-4'>Sector</li>
              <li className='pb-4'>Watchlist</li>
              <li className='pb-4'>Events</li>
              <li className='pb-4'>News/Interview</li>

            </ul>

          </div>
        </div>
        <div className={`  z-10  bg-gray-400 h-screen md:h-[800px] w-4 flex flex-col justify-center duration-300 relative align-middle ${open ? 'translate-x-64 md:translate-x-64': '-translate-x-0 p-0 m-0 md:-translate-x-0' }`} onClick={()=>setOpen(!open)}>
          <div className='bg-blue-950 text-white  mb-96 md:mb-0 py-10 '>
          <FaCaretRight className={`${!open && "rotate-180"}`} />

          </div>
        </div>

        <div className={`bg-white relative left-0 w-full  `}>
          <div className={`flex md:justify-between justify-center text-center md:w-3/4 bg-blue-950 text-white md:bg-white md:${open ? 'translate-x-64 md:translate-x-64': '-translate-x-0 p-0 m-0 md:-translate-x-0' } duration-500`}  onClick={()=>{
                setShow(!show)}} >
            <div className='w-2/5 ' >
              <h1 className='text-center text-sm font-OverLock tracking-wide font-bold  md:text-4xl   hover:bg-blue-900 hover:text-blue-950 md:rounded-sm md:duration-300 md:py-4 md:ms-16 md:w-3/4  md:bg-slate-400 md:text-red-500 '>Discussion Fourm</h1>
            </div>
            <hr className='text-gray-400 rotate-90 w-9 md:w-16 m-0 p-0 md:hidden'></hr>
            <div className='w-2/5 md:w-1/5 '>
              <h1 className={`text-sm md:text-3xl md:rounded-sm md:w-72 md:font-OverLock md:font-bold hover:bg-blue-900 hover:text-blue-950 md:text-red-500 md:bg-slate-400 md:px-4 md:py-2  md:${open? 'md:ms-0':'md:ms-20'}`} onClick={()=>{setShows(!shows)}}>Market Stories</h1>
            </div>


          </div>
          <div className='flex'>
          <div className={`mt-5  ${!show ? 'block':'hidden'} md:block `}>
              
           <div  className={` px-4 flex flex-col items-center bg-white border border-gray-200 rounded-3xl shadow w-[385px] ms-2 md:w-[750px] md:ms-16 md:${open ? 'translate-x-64 md:translate-x-64': '-translate-x-0 p-0 m-0 md:-translate-x-0' } duration-500 mb-4`}>
            <div className='flex flex-row justify-start w-full'>
           <img className="object-cover rounded-xl w-14 md:w-28 " src='profimg.jpeg' alt=""/>
           <p className='pt-4 w-1/4 text-sm md:text-2xl md:pt-6'>Lorem Ipsum</p>
           <div className="ms-3 md:ms-0 w-16 h-6 mt-4  bg-blue-100 text-center md:mt-6 pt-1 text-blue-800 text-xs rounded-3xl dark:bg-blue-900 dark:text-blue-300"><p className=''>Sector2</p></div>
           <p className='ps-24 text-xs pt-3 md:ms-40 md:text-xl text-blue-600'>2 mins</p>
           </div>
           <p className="mb-3 font-normal text-sm ps-3 md:text-2xl md:ps-0  text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions</p>
           <div className='flex flex-row justify-around '>
           <p className='px-10 text-xs md:text-xl md:px-20 text-blue-600 md:mt-2'><CiHeart />2k</p>
           <p className='px-10 text-xs md:text-xl md:px-20 text-blue-600 md:mt-2'><IoEyeSharp /> 2k</p>
           <p className='px-10 text-xs md:text-xl md:px-20 text-blue-600 md:mt-2'><LiaComments /> 2k</p>
           <p className='px-10 text-xs md:text-xl md:px-20 text-blue-600 md:mt-2'><IoShareSocial /> Share</p>


           </div>
          
          </div>
          <div  className={` px-4 flex flex-col items-center bg-white border border-gray-200 rounded-3xl shadow w-[385px] ms-2 md:w-[750px] md:ms-16 md:${open ? 'translate-x-64 md:translate-x-64': '-translate-x-0 p-0 m-0 md:-translate-x-0' } duration-500 mb-4`}>
            <div className='flex flex-row justify-start w-full'>
           <img className="object-cover rounded-xl w-14 md:w-28 " src='profimg.jpeg' alt=""/>
           <p className='pt-4 w-1/4 text-sm md:text-2xl md:pt-6'>Lorem Ipsum</p>
           <div className="ms-3 md:ms-0 w-16 h-6 mt-4  bg-blue-100 text-center md:mt-6 pt-1 text-blue-800 text-xs rounded-3xl dark:bg-blue-900 dark:text-blue-300"><p className=''>Sector2</p></div>
           <p className='ps-24 text-xs pt-3 md:ms-40 md:text-xl text-blue-600'>2 mins</p>
           </div>
           <p className="mb-3 font-normal text-sm ps-3 md:text-2xl md:ps-0  text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions</p>
           <div className='flex flex-row justify-around '>
           <p className='px-10 text-xs md:text-xl md:px-20 text-blue-600 md:mt-2'><CiHeart />2k</p>
           <p className='px-10 text-xs md:text-xl md:px-20 text-blue-600 md:mt-2'><IoEyeSharp /> 2k</p>
           <p className='px-10 text-xs md:text-xl md:px-20 text-blue-600 md:mt-2'><LiaComments /> 2k</p>
           <p className='px-10 text-xs md:text-xl md:px-20 text-blue-600 md:mt-2'><IoShareSocial /> Share</p>


           </div>
          
          </div>
          <div  className={` px-4 flex flex-col items-center bg-white border border-gray-200 rounded-3xl shadow w-[385px] ms-2 md:w-[750px] md:ms-16 md:${open ? 'translate-x-64 md:translate-x-64': '-translate-x-0 p-0 m-0 md:-translate-x-0' } duration-500 mb-4`}>
            <div className='flex flex-row justify-start w-full'>
           <img className="object-cover rounded-xl w-14 md:w-28 " src='profimg.jpeg' alt=""/>
           <p className='pt-4 w-1/4 text-sm md:text-2xl md:pt-6'>Lorem Ipsum</p>
           <div className="ms-3 md:ms-0 w-16 h-6 mt-4  bg-blue-100 text-center md:mt-6 pt-1 text-blue-800 text-xs rounded-3xl dark:bg-blue-900 dark:text-blue-300"><p className=''>Sector2</p></div>
           <p className='ps-24 text-xs pt-3 md:ms-40 md:text-xl text-blue-600'>2 mins</p>
           </div>
           <p className="mb-3 font-normal text-sm ps-3 md:text-2xl md:ps-0  text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions</p>
           <div className='flex flex-row justify-around '>
           <p className='px-10 text-xs md:text-xl md:px-20 text-blue-600 md:mt-2'><CiHeart />2k</p>
           <p className='px-10 text-xs md:text-xl md:px-20 text-blue-600 md:mt-2'><IoEyeSharp /> 2k</p>
           <p className='px-10 text-xs md:text-xl md:px-20 text-blue-600 md:mt-2'><LiaComments /> 2k</p>
           <p className='px-10 text-xs md:text-xl md:px-20 text-blue-600 md:mt-2'><IoShareSocial /> Share</p>


           </div>
          
          </div>


            </div>
            <div className= {`${!shows ? 'hidden': 'block'} md:block ${!show ? 'hidden':'block'} ms-24 mt-2 md:ms-0 md:mt-0`}>
              

<div className={` md:${open ? 'translate-x-64 md:translate-x-64 md:ms-20': '-translate-x-0 p-0 m-0 md:-translate-x-0 md:ms-[80px]' } duration-500 w-[201px] h-[154px] md:w-[300px] md:h-auto bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mb-3 `}>
        <img className="rounded-t-lg w-[200px] h-[50px] md:w-[300px] md:h-[100px] " src="cardimage.jpg" alt="" />
    <div className="p-5">
            <h5 className="mb-1 text-xs md:text-sm font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology</h5>
        <p className="mb-1 font-normal text-gray-700 dark:text-gray-400 md:text-xs text-[10px]">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
    </div>
</div>
<div className={` md:${open ? 'translate-x-64 md:translate-x-64 md:ms-20': '-translate-x-0 p-0 m-0 md:-translate-x-0 md:ms-[300px]' } duration-500 w-[201px] h-[154px] md:w-[300px] md:h-auto bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mb-3`}>
        <img className="rounded-t-lg w-[200px] h-[50px] md:w-[300px] md:h-[100px] " src="cardimage.jpg" alt="" />
    <div className="p-5">
            <h5 className="mb-1 md:text-sm text-xs font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology</h5>
        <p className="mb-1 font-normal text-gray-700 dark:text-gray-400 md:text-xs text-[10px]">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
    </div>
</div>
<div className={` md:${open ? 'translate-x-64 md:translate-x-64 md:ms-20': '-translate-x-0 p-0 m-0 md:-translate-x-0 md:ms-[80px]' } duration-500 w-[201px] h-[154px] md:w-[300px] md:h-auto  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 `}>
        <img className="rounded-t-lg w-[200px] h-[50px] md:w-[300px] md:h-[100px] " src="cardimage.jpg" alt="" />
    <div className="p-5">
            <h5 className="mb-1 md:text-sm text-xs font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology</h5>
        <p className="mb-1 font-normal text-gray-700 dark:text-gray-400 md:text-xs text-[10px]">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
    </div>
</div>


            </div>

          </div>

        </div>

      </div>
    </>
  )
}

export default page
