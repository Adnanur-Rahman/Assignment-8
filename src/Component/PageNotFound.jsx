import React from 'react';
import PageNotFounded from "../images/error-404.png"
import { useNavigate } from 'react-router';

const PageNotFound = () => {
     const navigate=useNavigate();
    return (
            <div className='mt-20 text-center flex flex-col items-center justify-center'>
                  <div><img src={PageNotFounded} alt="PageNotFound" /></div>
                  <h3 className='text-3xl font-bold text-[#001931]'>Oops, page not found!</h3>
                  <p className='text-[#627382]'>The page you are looking for is not available.</p>
                  <button onClick={()=>navigate(-1)} className='mt-2 text-center bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white px-4 py-2 rounded-lg hover:cursor-pointer '>Go Back</button>
              </div>
    );
};

export default PageNotFound;