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

  const [ addCriteria, setAddCriteria ] = useState(false);
  const [ showFindingHistoryRow, setShowFindingHistoryRow ] = useState(false);
  const [ findingHistoryPropsActive, setFindingHistoryPropsActive ] = useState(false);
  const [ showCompanyInfoRow, setShowCompanyInfoRow ] = useState(false);
  const [ companyInfoPropsActive, setCompanyInfoPropsActive ] = useState(false);
  const [ showCustomerCaseStudiesRow, setShowCustomerCaseStudiesRow ] = useState(false);
  const [ customerCaseStudiesPropsActive, setCustomerCaseStudiesPropsActive ] = useState(false);
  const [ showFeaturesPropsRow, setShowFeaturesPropsRow ] = useState(false);
  const [ featuresPropsActive, setFeaturesPropsActive ] = useState(false);

  const renderItemProps = (prop, key, color) => {
    return (
      <tr className={`${color && `bg-${color}`} text-white`}>
        <th>
          <div>
            {vendors[0][prop][key].propName}
          </div>
        </th>
        {vendors.ids.map((id, idx) => {
          return (
            <th key={idx}>
              <div className="flex flex-col font-thin py-2 text-gray-400">
                {vendors[id][prop][key].value.map((text, idx) => {
                  return (
                    <span key={idx} className="mr-2">{text}</span>
                  );
                })}
              </div>
            </th>
          );
        })}
      </tr>
    );
  };

  const renderItem = (item, activeProps, setActiveProps, color) => {
    return (
      <tr>
        <th className="p-5">
          <div
            className="cursor-pointer w-full flex justify-between items-center"
          >
            <div
              className="mr-5 mb-1"
              onClick={() => setActiveProps(() => !activeProps)}
            >
              {activeProps ? <span>&#9650;</span> : <span>&#9660;</span>}
            </div>
            <div>{vendors[0][item].label}</div>
            <div
              className='border border-red-500 text-red-500 rounded-full cursor-pointer px-2 py-1 flex
                    justify-center items-center hover:bg-red-500 hover:text-white ml-5'
            >
              &#10060;
            </div>
          </div>
        </th>
        {vendors.ids.map((id) => {
          return (
            <th key={id} className={`${color && `${color} cursor-pointer`}`}>{vendors[id][item].value}</th>
          );
        })}
      </tr>
    );
  };

  return (
    <div className="w-full flex flex-col justify-center items-center text-purple-700 mb-20">
      <table className="w-full text-xs relative">
        <div
          style={{ top: '-25px', left: 0 }}
          className="absolute font-bold text-gray-400 flex flex-col"
        >
          <div
            className="flex cursor-pointer"
            onClick={() => setAddCriteria(() => !addCriteria)}
          >
            Add Criteria
            <div
              className="ml-5"
            >
              {addCriteria ? <span>&#9650;</span> : <span>&#9660;</span>}
            </div>
          </div>
          {
            addCriteria &&
            <div className="w-52 bg-white flex flex-col justify-center items-start">
              <div
                className={`my-5 ml-5 ${!showFindingHistoryRow && `cursor-pointer hover:text-purple-900`}`}>
                Finding History
              </div>
              <div
                className={`my-5 ml-5 cursor-pointer hover:text-purple-900`}>
                Company Info
              </div>
              <div
                className={`my-5 ml-5 cursor-pointer hover:text-purple-900`}>
                Features
              </div>
              <div
                className={`my-5 ml-5 cursor-pointer hover:text-purple-900`}>
                Customer Case Studies
              </div>
            </div>
          }
        </div>
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
                    <div className="absolute top-0 right-0 m-1 text-red-500">&#10060;</div>
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
          {renderItem('findingHistory', findingHistoryPropsActive, setFindingHistoryPropsActive)}
          {findingHistoryPropsActive && renderItemProps('findingHistoryProps', 'Founders', 'gray-900')}
          {findingHistoryPropsActive && renderItemProps('findingHistoryProps', 'Key Investors')}
          {findingHistoryPropsActive && renderItemProps('findingHistoryProps', 'founded', 'gray-900')}

          {renderItem('companyInfo', companyInfoPropsActive, setCompanyInfoPropsActive, 'text-blue-600')}
          {companyInfoPropsActive && renderItemProps('companyInfoProps', 'property 1', 'gray-900')}
          {companyInfoPropsActive && renderItemProps('companyInfoProps', 'property 2')}
          {companyInfoPropsActive && renderItemProps('companyInfoProps', 'property 3', 'gray-900')}

          {renderItem('features', featuresPropsActive, setFeaturesPropsActive)}
          {featuresPropsActive && renderItemProps('featuresProps', 'property 4', 'gray-900')}
          {featuresPropsActive && renderItemProps('featuresProps', 'property 5')}
          {featuresPropsActive && renderItemProps('featuresProps', 'property 6', 'gray-900')}

          {renderItem('customerCaseStudies', customerCaseStudiesPropsActive, setCustomerCaseStudiesPropsActive)}
          {customerCaseStudiesPropsActive && renderItemProps('customerCaseStudiesProps', 'property 7', 'gray-900')}
          {customerCaseStudiesPropsActive && renderItemProps('customerCaseStudiesProps', 'property 8')}
          {customerCaseStudiesPropsActive && renderItemProps('customerCaseStudiesProps', 'property 9', 'gray-900')}
          {customerCaseStudiesPropsActive && renderItemProps('customerCaseStudiesProps', 'property 10')}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
