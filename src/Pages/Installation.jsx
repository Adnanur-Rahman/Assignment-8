import React, { useEffect, useState } from 'react';
import useLocalStorage from '../Component/useLocalStorage';
import Container from "../Component/Container";
import InstalledApps from '../Component/InstalledApps';
import Loading from '../Component/Loading';

const Installation = () => {
const [installed, setInstalled]=useLocalStorage("installed", []);
const [loading, setLoading]=useState(true)  ;
const [sort, setSort]=useState("");
 const {image, companyName, description,  downloads, ratingAvg, ratings,reviews,size, title}=installed;
useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

if(loading){
  return <Loading></Loading>;
}


    const handleSort=(type)=>{
setSort(type);
if(type ==="Low -> High"){
    const sortedByAcc= [...installed].sort((a,b)=>a.downloads - b.downloads);
setInstalled(sortedByAcc);
}
if(type ==="High -> Low"){
    const sortedByDes=  [...installed].sort((a,b)=>b.downloads - a.downloads);
setInstalled(sortedByDes);
}
    }
   
    console.log(installed);
    
    return (
      <Container>
          <div>
                           <div className='text-center my-5'>
         <h3 className='text-3xl font-bold'>Your Installed Apps</h3>
        <small className='text-[#627382]'>Explore All Trending Apps on the Market developed by us</small>
       </div>
        <div className='flex justify-between items-center p-4'>
        <h3 className='font-bold '>{installed.length} Apps Found</h3>
       <details className="dropdown">
  <summary className="btn m-1">Sort By:{ sort?sort : ""}</summary>
  <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
    <li className='font-bold'><button  onClick={()=>handleSort("Low -> High")}>Low &rarr; High</button></li>
    <li className='font-bold'><button  onClick={()=>handleSort("High -> Low")}>Low &rarr; High</button></li>
  </ul>
</details>
       </div >
<div className=''>
       {
    installed.map(app=><InstalledApps key={app.id} app={app} setInstalled={setInstalled} installed={installed}></InstalledApps>)
   }
</div>
        </div>
      </Container>
    );
};

export default Installation;