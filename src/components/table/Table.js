import React, { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { ReactComponent as AddIcon } from '../../icons/add-icon.svg';
import Spinner from '../spinner';

const Table = () => {

  const vendorsEntity = useSelector((state) => state.appState.vendors);
  const [ vendors, setVendors ] = useState(null);

  useEffect(() => {
    vendorsEntity && setVendors(vendorsEntity);
  }, [vendorsEntity]);

  console.log(vendors);

  if (!vendors) {
    return <Spinner />;
  }

  return (
    <div className='w-full flex flex-col justify-center items-center'>
      <div className="text-purple-700 m-10">
        Table Page
      </div>
      <Link to="/">
        <div className="m-10 p-10 border border-purple-700 text-purple-700 rounded cursor-pointer">
          Go to home
        </div>
      </Link>
      {vendors && <RenderTable vendors={vendors} />}
    </div>
  );
};

const RenderTable = ({ vendors }) => {

  const [ findingHistoryPropsActive, setFindingHistoryPropsActive ] = useState(false);

  return (
    <div className="w-full flex flex-col justify-center items-center text-purple-700 mb-20">
      <table className="w-full text-xs">
        <thead>
          <tr className="border-t border-b border-purple-700 text-center">
            <th className="w-1/5 text-center hover:bg-gray-800 cursor-pointer">
              <div className="flex flex-col justify-center items-center">
                <div className="p-2 my-2 rounded-full bg-gray-700 text-purple-700">
                  <AddIcon />
                </div>
                <div className="">
                  Add New Vendor
                </div>
              </div>
            </th>
            {vendors.ids.map((id) => {
              return (
                <th key={id} className="w-1/5 text-center hover:bg-gray-900 cursor-pointer">
                  <div className="py-2 flex flex-col flex flex-col justify-center items-center relative">
                    <div className="w-10 h-10 my-3">{vendors[id].vendorIcon}</div>
                    <div>{vendors[id].vendorName}</div>
                    <div className="absolute top-0 right-0 m-1 text-red-500">x</div>
                  </div>
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          <tr>
            <th className="p-5">{vendors[0].overallScore.label}</th>
            {vendors.ids.map((id) => {
              return (
                <th key={id}>{vendors[id].overallScore.value}</th>
              );
            })}
          </tr>
          <tr>
              <th className="p-5">
                <div
                  className="cursor-pointer w-full flex justify-center items-center"
                >
                  <div
                    className="mr-5 mb-1"
                    onClick={() => setFindingHistoryPropsActive(!findingHistoryPropsActive)}
                  >
                    {findingHistoryPropsActive ? <span>&#9660;</span> : <span>&#9650;</span>}
                  </div>
                  <div>{vendors[0].findingHistory.label}</div>
                </div>
              </th>
              {vendors.ids.map((id) => {
                return (
                  <th key={id}>{vendors[id].findingHistory.value}</th>
                );
              })}
          </tr>
          {
            findingHistoryPropsActive &&
            <tr>
              <th>
                <div>
                  {vendors[0].findingHistoryProps.Founders.propName}
                </div>
              </th>
              {vendors.ids.map((id) => {
                return (
                  <th key={id}>
                    <div className="flex flex-col">
                      {vendors[id].findingHistoryProps.Founders.value.map((text, idx) => {
                        return (
                          <span id={idx} className="mr-2">{text}</span>
                        );
                      })}
                    </div>
                  </th>
                );
              })}
            </tr>
          }
          {
            findingHistoryPropsActive &&
            <tr>
              <th>
                <div>
                  {vendors[0].findingHistoryProps.Founders.propName}
                </div>
              </th>
              {vendors.ids.map((id) => {
                return (
                  <th key={id}>
                    <div className="flex flex-col">
                      {vendors[id].findingHistoryProps.Founders.value.map((text, idx) => {
                        return (
                          <span id={idx} className="mr-2">{text}</span>
                        );
                      })}
                    </div>
                  </th>
                );
              })}
            </tr>
          }
          <tr>
            <th className="p-5">{vendors[0].companyInfo.label}</th>
            {vendors.ids.map((id) => {
              return (
                <th key={id} className="text-blue-700 cursor-pointer">{vendors[id].companyInfo.value}</th>
              );
            })}
          </tr>
          <tr>
            <th className="p-5">{vendors[0].features.label}</th>
            {vendors.ids.map((id) => {
              return (
                <th key={id}>{vendors[id].features.value}</th>
              );
            })}
          </tr>
          <tr>
            <th className="p-5">{vendors[0].customerCaseStudies.label}</th>
            {vendors.ids.map((id) => {
              return (
                <th key={id}>{vendors[id].customerCaseStudies.value}</th>
              );
            })}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;