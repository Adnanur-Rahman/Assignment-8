import React from 'react';
import notAppFound from "../images/App-Error.png"
import { useNavigate } from 'react-router';

const NotFoundApp = () => {
    const navigate=useNavigate();
    return (
        <div className='mt-20 text-center flex flex-col items-center justify-center'>
            <div><img src={notAppFound} alt="" /></div>
            <h3 className='text-3xl font-bold text-[#001931]'>OPPS!! APP NOT FOUND</h3>
            <p className='text-[#627382]'>The App you are requesting is not found on our system. please try another apps</p>
            <button onClick={()=>navigate(-1)} className='mt-2 text-center bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white px-4 py-2 rounded-lg hover:cursor-pointer '>Go Back</button>
        </div>
    );
};

export default NotFoundApp;