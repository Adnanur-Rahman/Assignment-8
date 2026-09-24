import React from 'react';
import { FaDownload } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { Link } from 'react-router';

const TrendingAppCard = ({trendingApps}) => {

    const {title, ratingAvg, downloads, image, id }=trendingApps;
    
    return (
<Link to={`/apps/${id}`}>
<div>
        <div className="card bg-base-100 shadow-sm p-5 rounded-2xl">
  <figure >
    <img  className='w-full h-48 object-cover rounded-4xl'
      src={image}
      alt={title} />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      {title}
    </h2>
    <div className="card-actions justify-between">
      <div className="badge  text-[#00D390]"> <FaDownload  />
{downloads}</div>
      <div className="badge text-[#FF8811]"><FaStar />{ratingAvg}</div>
    </div>
  </div>
</div>

</div></Link>
    );
};

export default TrendingAppCard;