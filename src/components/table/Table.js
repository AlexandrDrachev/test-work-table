import React, { useState, useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { ReactComponent as AddIcon } from '../../icons/add-icon.svg';
import Spinner from '../spinner';
import AddNewVendor from '../add-new-vendor';
import CircularProgressIndicator from '../circular-progress-indicator';
import { removeVendorAction } from './store/tableActions';

const Table = () => {

  const tableState = useSelector((state) => state.tableState);
  const { tableData, loading } = tableState;
  const [ vendors, setVendors ] = useState(null);

  useEffect(() => {
    tableData && setVendors(tableData);
  }, [tableData]);

  if (loading) {
    return <Spinner />;
  }

  return (
    <div className='w-full flex flex-col justify-center items-center'>
      {vendors && <RenderTable vendors={vendors} loading={loading} />}
    </div>
  );
};

const RenderTable = ({ vendors, loading }) => {

  const [ addNewWendor, setAddNewWendor ] = useState(false);
  const [ addCriteria, setAddCriteria ] = useState(false);
  const [ showFindingHistoryRow, setShowFindingHistoryRow ] = useState(true);
  const [ findingHistoryPropsActive, setFindingHistoryPropsActive ] = useState(false);
  const [ showCompanyInfoRow, setShowCompanyInfoRow ] = useState(false);
  const [ companyInfoPropsActive, setCompanyInfoPropsActive ] = useState(false);
  const [ showCustomerCaseStudiesRow, setShowCustomerCaseStudiesRow ] = useState(false);
  const [ customerCaseStudiesPropsActive, setCustomerCaseStudiesPropsActive ] = useState(false);
  const [ showFeaturesRow, setShowFeaturesRow ] = useState(false);
  const [ featuresPropsActive, setFeaturesPropsActive ] = useState(false);
  const dispatch = useDispatch();

  const showRow = (setRow) => {
    setRow(true);
    setAddCriteria(false);
  };

  const onDeleteRow = (onDelRow, onDelProps) => {
    onDelRow(false);
    onDelProps(false);
    setAddCriteria(false);
  };

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

  const renderItem = (item, activeProps, setActiveProps, onDelRow, onDelProps, color) => {
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
            <div onClick={() => setActiveProps(() => !activeProps)}>{vendors[vendors.ids[0]][item].label}</div>
            <div
              onClick={() => onDeleteRow(onDelRow, onDelProps)}
              className='border border-red-500 text-red-500 rounded-full cursor-pointer p-3 py-1 flex
                    justify-center items-center ml-5'
            >
              &#10060;
            </div>
          </div>
        </th>
        {vendors.ids.map((id) => {
          if (vendors[id][item].label === 'Company Info') {
            return (
              <th key={id} className={`${color && `${color} cursor-pointer`}`}>
                <a href={`https://${vendors[id][item].value}`} target="_blank" rel="noreferrer">
                  {vendors[id][item].value}
                </a>
              </th>
            );
          }
          return (
            <th key={id} className={`${color && `${color} cursor-pointer`}`}>{vendors[id][item].value}</th>
          );
        })}
      </tr>
    );
  };

  if (!vendors.ids.length) {
    return <AddNewVendor onClose={setAddNewWendor} />
  }

  return (
    <div className="w-full flex flex-col justify-center items-center text-purple-700 my-20">
      {addNewWendor && <AddNewVendor onClose={setAddNewWendor} />}
      <table className="w-full text-xs relative">
        <thead>
          <tr>
            <th>
              <div
                style={{ top: '-25px', left: 0 }}
                className="absolute font-bold text-gray-400 flex flex-col"
              >
                <div
                  className="flex cursor-pointer mb-2"
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
                      onClick={() => !showFindingHistoryRow && showRow(setShowFindingHistoryRow)}
                      className={`my-5 ml-5 ${!showFindingHistoryRow && `cursor-pointer hover:text-purple-900`}`}>
                      <span>Finding History</span>
                      {
                        showFindingHistoryRow &&
                        <span className="text-green-600 ml-5 text-xl">&#10003;</span>
                      }
                    </div>
                    <div
                      onClick={() => !showCompanyInfoRow && showRow(setShowCompanyInfoRow)}
                      className={`my-5 ml-5 ${!showCompanyInfoRow && `cursor-pointer hover:text-purple-900`}`}>
                      <span>Company Info</span>
                      {
                        showCompanyInfoRow &&
                        <span className="text-green-600 ml-5 text-xl">&#10003;</span>
                      }
                    </div>
                    <div
                      onClick={() => !showFeaturesRow && showRow(setShowFeaturesRow)}
                      className={`my-5 ml-5 ${!showFeaturesRow && `cursor-pointer hover:text-purple-900`}`}>
                      <span>Features</span>
                      {
                        showFeaturesRow &&
                        <span className="text-green-600 ml-5 text-xl">&#10003;</span>
                      }
                    </div>
                    <div
                      onClick={() => !showCustomerCaseStudiesRow && showRow(setShowCustomerCaseStudiesRow)}
                      className={`my-5 ml-5 ${!showCustomerCaseStudiesRow && `cursor-pointer hover:text-purple-900`}`}>
                      <span>Customer Case Studies</span>
                      {
                        showCustomerCaseStudiesRow &&
                        <span className="text-green-600 ml-5 text-xl">&#10003;</span>
                      }
                    </div>
                  </div>
                }
              </div>
            </th>
          </tr>
        </thead>
        <thead>
          <tr className="border-t border-b border-purple-700 text-center">
            <th className="w-1/5 text-center hover:bg-gray-800 cursor-pointer">
              <div
                className="flex flex-col justify-center items-center"
                onClick={() => setAddNewWendor(true)}
              >
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
                <th key={id} className="w-1/5 text-center hover:bg-gray-900">
                  <div className="py-2 flex flex-col flex flex-col justify-center items-center relative">
                    <div className="w-10 h-10 my-3">{vendors[id].vendorIcon}</div>
                    <div>{vendors[id].vendorName}</div>
                    <div
                      className="absolute top-0 right-0 m-1 text-red-500 cursor-pointer"
                      onClick={() => dispatch(removeVendorAction(id))}
                    >
                      &#10060;
                    </div>
                  </div>
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          <tr>
            <th className="pt-5">{vendors[vendors.ids[0]].overallScore.label}</th>
            {vendors.ids.map((id) => {
              return (
                <th key={id} className="text-center pt-5">
                  <CircularProgressIndicator value={vendors[id].overallScore.value} />
                </th>
              );
            })}
          </tr>
          {showFindingHistoryRow && renderItem(
            'findingHistory',
            findingHistoryPropsActive,
            setFindingHistoryPropsActive,
            setShowFindingHistoryRow,
            setFindingHistoryPropsActive)}
          {findingHistoryPropsActive && showFindingHistoryRow &&renderItemProps('findingHistoryProps', 'Founders', 'gray-900')}
          {findingHistoryPropsActive && showFindingHistoryRow && renderItemProps('findingHistoryProps', 'Key Investors')}
          {findingHistoryPropsActive && showFindingHistoryRow && renderItemProps('findingHistoryProps', 'founded', 'gray-900')}

          {showCompanyInfoRow && renderItem(
            'companyInfo',
            companyInfoPropsActive,
            setCompanyInfoPropsActive,
            setShowCompanyInfoRow,
            setCompanyInfoPropsActive,
            'text-blue-600')}
          {companyInfoPropsActive && showCompanyInfoRow && renderItemProps('companyInfoProps', 'property 1', 'gray-900')}
          {companyInfoPropsActive && showCompanyInfoRow && renderItemProps('companyInfoProps', 'property 2')}
          {companyInfoPropsActive && showCompanyInfoRow && renderItemProps('companyInfoProps', 'property 3', 'gray-900')}

          {showFeaturesRow && renderItem(
            'features',
            featuresPropsActive,
            setFeaturesPropsActive,
            setShowFeaturesRow,
            setFeaturesPropsActive)}
          {featuresPropsActive && showFeaturesRow && renderItemProps('featuresProps', 'property 4', 'gray-900')}
          {featuresPropsActive && showFeaturesRow && renderItemProps('featuresProps', 'property 5')}
          {featuresPropsActive && showFeaturesRow && renderItemProps('featuresProps', 'property 6', 'gray-900')}

          {showCustomerCaseStudiesRow && renderItem(
            'customerCaseStudies',
            customerCaseStudiesPropsActive,
            setCustomerCaseStudiesPropsActive,
            setShowCustomerCaseStudiesRow,
            setCustomerCaseStudiesPropsActive)}
          {customerCaseStudiesPropsActive && showCustomerCaseStudiesRow && renderItemProps('customerCaseStudiesProps', 'property 7', 'gray-900')}
          {customerCaseStudiesPropsActive && showCustomerCaseStudiesRow && renderItemProps('customerCaseStudiesProps', 'property 8')}
          {customerCaseStudiesPropsActive && showCustomerCaseStudiesRow && renderItemProps('customerCaseStudiesProps', 'property 9', 'gray-900')}
          {customerCaseStudiesPropsActive && showCustomerCaseStudiesRow && renderItemProps('customerCaseStudiesProps', 'property 10')}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
