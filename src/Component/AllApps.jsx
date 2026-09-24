import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router';
import TrendingAppCard from './TrendingAppCard';
import Loading from './Loading';
import Container from './Container';

const AllApps = () => {
    const AppsData=useLoaderData();
  
    const [search, setSearch]=useState('');
    const searchWord=search.trim().toLowerCase();
    const searchApps=searchWord?AppsData.filter(app=>app.title.trim().toLowerCase().includes(searchWord)):AppsData;
    const [loading, setLoading]=useState(false);
    const handleSearch = (e) => {
    setLoading(true);
    setSearch(e.target.value);

    setTimeout(() => {
        setLoading(false);
    }, 150);
};
    return (
        <div>
                <Container>
                    <div className='text-center my-5'>
         <h3 className='text-3xl font-bold'>Our All Applications</h3>
        <small className='text-[#627382]'>Explore All Apps on the Market developed by us. We code for Millions</small>
       </div>
       <div className='flex justify-between items-center p-4'>
        <h3 className='font-bold '>({searchApps.length}) Apps Found</h3>
        <label className="input">
  <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <g
      strokeLinejoin="round"
      strokeLinecap="round"
      strokeWidth="2.5"
      fill="none"
      stroke="currentColor"
    >
      <circle cx="11" cy="11" r="8"></circle>
      <path d="m21 21-4.3-4.3"></path>
    </g>
  </svg>
  <input type="search" value={search} onChange={handleSearch} required placeholder="Search" />
</label>
       </div>
              <div className='grid grid-cols-1 gap-5 my-5 md:grid-cols-3 lg:grid-cols-4'> 

{
 loading? <div className=' col-span-full text-center'><Loading></Loading></div>:  searchApps.length> 0 ?  searchApps.map((App)=> <TrendingAppCard key={App.id} trendingApps={App}></TrendingAppCard>) : <div className='col-span-full  text-center my-25 font-bold'><h3 className='text-[#001931] text-5xl mb-9'>No Apps Found</h3><button onClick={()=>setSearch('')} className=' gap-2 bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white px-4 py-2 rounded-lg hover:cursor-pointer'>Show All Apps</button></div>  
}
       </div>
                </Container>
        </div>
    );
};

export default AllApps;