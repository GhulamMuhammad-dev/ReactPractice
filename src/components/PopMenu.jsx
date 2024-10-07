import { useState } from "react"


const PopMenu = () => {

   const [navItem,setNavItem]=useState([
    {
        text:"Home"
    },
    {
        text:"About"
    },
    {
        text:"Work"
    },
    {
        text:"Contact"
    },
   ])




  return (
    <div className="   m-2 p-4 rounded-xl flex flex-col gap-4 backdrop-blur-md shadow-lg bg-gradient-to-l from-[#C77DFF]/0 to-[#C77DFF]/10   border border-white border-opacity-30 max-w-52 sm:max-w-64  md:max-w-72">
    <nav className="">
      <ul className="flex flex-col gap-4 w-44 sm:w-56 md:w-64">
       
       {navItem.map((item)=>{
        return <li key={item.text} className="bg-gradient-to-t from-[#C77DFF]/0 to-[#C77DFF]/10   border border-white border-opacity-30 py-4  rounded-2xl text-center text-white font-medium backdrop-blur-md shadow-lg hover:from-[#C77DFF]/20  ">{item.text}</li>
       })}


        {/* <li className="bg-red-500 py-4  rounded-2xl text-center">Home</li>
        <li className="bg-red-500 py-4  rounded-2xl text-center">About</li>
        <li className="bg-red-500 py-4  rounded-2xl text-center">Work</li>
        <li className="bg-red-500 py-4  rounded-2xl text-center">Contact</li> */}
      </ul>
      </nav>

      <button className="bg-[#C77DFF] hover:bg-[#9D4EDD] py-4  rounded-2xl text-center w-44 sm:w-56 md:w-64">Lets Talk</button>


    </div>
  )
}

export default PopMenu
