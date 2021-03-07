import React from 'react';

import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { vendorCards } from '../add-new-vendor/AddNewVendor';

const Home = () => {

  const tableData = useSelector((state) => state.tableState.tableData);

  return (
    <div className='w-full flex flex-col justify-center items-center'>
      <div className="text-purple-700 m-10 flex">
        <span className="text-2xl font-bold">Added Vendors:</span>
        <span className="ml-5 text-2xl font-bold">{tableData.ids.length}</span>
      </div>
      {
        tableData.ids.length ?
        <div className="flex flex-wrap justify-around items-center">
          {
            vendorCards.map((card) => {
              if (tableData.ids.some((idx) => idx === card.id)) {
                return (
                  <div key={card.id} className="flex flex-col justify-center items-center mx-10 mb-10">
                    <div className="w-40 h-40">
                      {card.vendorIcon}
                    </div>
                    <span className="text-xl font-bold mt-5">{card.vendorName}</span>
                  </div>
                );
              }
              return null;
            })
          }
        </div> :
        <Link
          to="/table"
          className="flex justify-center items-center font-bold text-xl text-green-700 border-2 border-green-600
          px-10 py-5 hover:bg-green-600 hover:text-white rounded-lg"
        >
          Add New Vendor
        </Link>
      }
    </div>
  );
};

export default Home;