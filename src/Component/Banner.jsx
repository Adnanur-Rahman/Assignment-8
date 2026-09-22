import React from 'react';
import bannerImage from "../images/hero.png"
import Container from './Container';
import { Link } from 'react-router';
import googlePlayImage from "../images/google play.jpg"
import appleStoreImage from "../images/iappstore.png"

const Banner = () => {
    return (
      <Container>
          <div className='text-center' >
            <h1 className='text-5xl font-bold'>We Build <br /><span className='bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent'>Productive </span>Apps</h1>
            <p className='m-3 text-[#627382]'>At HEROIO. we craft innovative apps designed to make everyday life simpler, smarter. and more exciting,
Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
            <div className='flex justify-center items-center gap-2 m-2'>
               <Link to="https://play.google.com/store/apps?hl=en"> <button className='flex gap-2 btn'><span><img className='h-5 w-5' src={googlePlayImage} alt="googlePlayImage" /></span> Google Play</button></Link>
                <Link to="https://apps.apple.com/us/iphone/apps"><button className='btn flex gap-2'> <span><img className='h-5 w-5' src={appleStoreImage} alt="appleStoreImage" /></span> App Store</button></Link>
            </div>
            <div className='flex justify-center items-center p-4'>
                <img className='w-full h-auto md:w-[70%]' src={bannerImage} alt="Banner image" /></div>
        </div>
      </Container>
    );
};

export default Banner;