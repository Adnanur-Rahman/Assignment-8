import React from 'react';
import Container from './Container';

const AppSummary = () => {
    return (
        <div className='p-10 bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white '>
            <Container>
                <h1 className='text-center text-3xl mb-5  font-bold'>Trusted By Millions, Built For You</h1>
      <div className='flex flex-col justify-center items-center gap-10 md:flex-row  ' >
                  <div >
                    <small>Total Downloads</small>
                    <h3 className=' text-4xl font-extrabold' >29.6M</h3 >
                    <small>21% More Than Last Month</small>
                </div>
                <div>
                    <small>Total Reviews</small>
                    <h3 className=' text-4xl font-extrabold' >906K</h3 >
                    <small>46% More Than Last Month</small>
                </div>
                <div className='mr-10'>
                    <small>Active Apps</small>
                    <h3 className='text-4xl font-extrabold'>132+</h3 >
                    <small>31 More Will Launch</small>
                </div>
      </div>
            </Container>
        </div>
    );
};

export default AppSummary;