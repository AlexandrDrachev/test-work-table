import React from 'react';

import { Link } from 'react-router-dom';

const Home = () => {

  return (
    <div className='w-full flex flex-col justify-center items-center'>
      <div className="text-purple-700 m-10">
        Home Page
      </div>
      <Link to="/table">
        <div className="m-20 p-10 border border-purple-700 text-purple-700 rounded cursor-pointer">
          Go to table
        </div>
      </Link>
    </div>
  );
};

export default Home;