import React, { useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import { FiDownload } from "react-icons/fi";
import { FaStar } from "react-icons/fa";
import totalReviewImage from "../images/thums up.png"
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import Container from './Container';
import useLocalStorage from './useLocalStorage';
import NotFoundApp from './NotFoundApp';
import { toast } from 'react-toastify';

const AppDetails = () => {
    const appsData=useLoaderData();

    const {id}=useParams();
    const specificData=appsData.find(app=>app.id === Number(id));
 if (!specificData) {
    return <NotFoundApp/>;
  }
  const {image, companyName, description,  downloads, ratingAvg, ratings,reviews,size, title}=specificData;
const [installed, setInstalled]=useLocalStorage("installed", []);
 const isInstalled = installed.some(
    app => app.id === specificData.id
  );
const handleInstall=()=>{
  if(!isInstalled)
  {
    setInstalled([...installed, specificData]);
  }
  toast(`${title} App Installed Successfully`);

};
    
    return (
        <div>
        <Container>
              <div className="my-5">
  <div className="flex flex-col items-center gap-10 lg:flex-row lg:items-start">
    <img
      alt={title}
      src={image}
      className="max-w-sm rounded-lg shadow-2xl"
    />
    <div>
      <h1 className="text-5xl font-bold">{title}</h1>
      <p className="py-6">
Developed by <span className='bg-gradient-to-r from-[#632EE3] to-[#9F62F2]  bg-clip-text text-transparent'>{companyName}</span>
      </p>
      <hr className='text-[#627382] mb-2' />
    <div className='flex flex-col justify-center items-center gap-10 md:flex-row  ' >
                  <div >
                    <FiDownload className='text-4xl text-[#54CF68]'  />
                    <small>Downloads</small>
                   
                     <h3 className='text-[#001931]  text-4xl font-extrabold' >{downloads}</h3 >
                </div>
                <div className='mr-10 md:mr-0'>
                    <FaStar className='text-[#FF8811] text-3xl' />
                    <small>Average Ratings</small>
                     <h3 className='text-[#001931]  text-4xl font-extrabold' >{ratingAvg}</h3 >
                </div>
                <div className='mr-10'>
                    <div><img src={totalReviewImage}/></div>
                    <small>Total Reviews</small>
                        <h3 className='text-[#001931] text-4xl font-extrabold'>{reviews}</h3 >
                </div>
      </div>
      <button onClick={handleInstall} disabled={isInstalled}  className={` btn btn-primary bg-[#00D390] text-white text-xl mt-5`}>{isInstalled?"Installed":`Install Now (${size} MB)`}</button>
    </div>
  </div>
</div>
<div >
  <h3 className='font-bold'>Ratings</h3>  
  <ResponsiveContainer width="100%" height={300}>
    <BarChart
      layout="vertical"
      data={[...ratings].reverse()}
      margin={{
        top: 10,
        right: 30,
        left: 20,
        bottom: 10
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />

      <XAxis type="number" />

      <YAxis
        type="category"
        dataKey="name"
      />

      <Tooltip />

      <Bar
        dataKey="count"
        fill="#FF8811"
        radius={[0, 5, 5, 0]}
      />
    </BarChart>
  </ResponsiveContainer>

</div>
<div className='my-5'>
    <h3 className='font-bold'>Description</h3>
    <p className='text-[#627382]'>{description}</p>
</div>
        </Container>
        </div>
    );
};

export default AppDetails;