import React from 'react';
import { FaDownload } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import useLocalStorage from './useLocalStorage';
import { toast } from 'react-toastify';

const InstalledApps = ({app, installed, setInstalled}) => {

    
    const {image, companyName, description,  downloads, ratingAvg, ratings,reviews,size, title}=app;
    const handleUninstall=()=>{
      toast(`${title} App Uninstalled Successfully`);
        const updatedInstalled=installed.filter(install=>install.id !== app.id )
setInstalled(updatedInstalled);
    }
    return (
        <div className='mb-5'>
                <div className=' w-full flex flex-col items-center justify-between shadow md:flex-row'>
               <div className=" flex flex-col m-5 items-center justify-center gap-5 rounded-2xl md:flex-row">
         <figure >
           <img   className='w-full h-24 md:w-32 md:h-32 object-cover rounded-2xl shrink-0'
             src={image}
             alt={title} />
         </figure>
         <div className="">
           <h2 className="text-3xl font-bold text-center mb-2">
             {title}
           </h2>
           <div className="flex gap-5">
             <div className="flex gap-2 text-[#00D390]"> <FaDownload  />
       {downloads}</div>
             <div className="flex gap-2 text-[#FF8811]"><FaStar />{ratingAvg}</div> 
             <div className='flex gap-2 text-[#627382]'>{size}MB</div>
          
           </div>
         </div>
       </div>
        <button onClick={handleUninstall} className={`mb-4 btn btn-primary bg-[#00D390] text-white text-xl mt-5`}>Uninstall</button>
       </div>
        </div>
    );
};

export default InstalledApps;