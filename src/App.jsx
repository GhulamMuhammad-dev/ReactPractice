

import GlassCard from './components/GlassCard';
import icon from "./assets/arrow-down-bold.svg";
import img1 from "./assets/myImg.png";


const App = () => {

  return (
    <div className="flex justify-center flex-wrap items-center min-h-screen bg-gray-900">

    <div className=' max-w-2xl   '>






    <GlassCard
         image={img1}
         heading="Ghulam Muhammad"
         subheading="Game developer"
         detail="I am a fullstack web and game developer"
         buttonIcon={icon}
         buttonIconSize="24px"
       />

    {/* <div className="grid gap-4 grid-cols-4">
      <div className='bg-blue-600 text-white p-4 rounded-md col-start-1 col-end-3'>01</div>
      <div className='bg-blue-600 text-white p-4 rounded-md'>02</div>
      <div className='bg-blue-600 text-white p-4 rounded-md'>03</div>
      <div className='bg-blue-600 text-white p-4 rounded-md'>04</div>
      <div className='bg-blue-600 text-white p-4 rounded-md'>05</div>
      <div className='bg-blue-600 text-white p-4 rounded-md'>06</div>
      <div className='bg-blue-600 text-white p-4 rounded-md'>07</div>
      <div className='bg-blue-600 text-white p-4 rounded-md'>08</div>
      <div className='bg-blue-600 text-white p-4 rounded-md'>09</div>
      
</div> */}


     
     </div>
    
    </div>
  );




}

export default App
