import React from 'react';
import TrashBustersScreenshot from '../../images/TrashBusters.png';

const TrashBusters = () => {

  return (
    <>
    <h2 className='section-title'>TrashBusters</h2>
    <a href="https://trashbusters-3ag6.onrender.com"><img src={TrashBustersScreenshot} alt="" className='project-screenshot'/></a>
    <p className='project-description'>This full stack MERN app is a demo website for facilitating community trash cleanup. 
    It allows users who see litter in their community to drop pins for needed cleanup on an embedded Google Map, add 
    descriptions for cleanup sites, and delete pins once trash sites have been cleaned. Developed skills include: MERN stack, 
    multi-repo integrations, deployment, environment variables, and automated testing.

    ***Please note: due to free testing, this app may take up to five minutes to load.***
    </p>
    <p className='project-description'>Check out my project hosted <a href="https://trashbusters-3ag6.onrender.com">on Render</a></p>
    
    </>
  );
};

export default TrashBusters;