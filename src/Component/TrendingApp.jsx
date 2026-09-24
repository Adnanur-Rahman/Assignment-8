import React from 'react';
import { Link, useLoaderData } from 'react-router';
import TrendingAppCard from './TrendingAppCard';
import Container from './Container';

const TrendingApp = () => {
    const trendingApps=useLoaderData()

    
    return (
       <Container>
         <div className='my-5'>
       <div className='text-center'>
         <h3 className='text-3xl font-bold'>Trending Apps</h3>
        <small className='text-[#627382]'>Explore All Trending Apps on the Market developed by us</small>
       </div>
       <div className='grid grid-cols-1 gap-5 my-5 md:grid-cols-3 lg:grid-cols-4 '> 
{
    trendingApps.map((trendingApps)=> <TrendingAppCard key={trendingApps.id} trendingApps={trendingApps}></TrendingAppCard>)
}
       </div>
   <div className='text-center'>
     <Link to="/apps">   <button className=" bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white px-4 py-2 rounded-lg hover:cursor-pointer">
         Show All
          </button></Link>
   </div>
        </div>
       </Container>
    );
};

export default TrendingApp;