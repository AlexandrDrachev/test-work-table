import React, { useState, useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { ReactComponent as BoxIcon } from '../../icons/box-icon.svg';
import { ReactComponent as DropboxIcon } from '../../icons/dropbox-icon.svg';
import { ReactComponent as GoogleDriveIcon } from '../../icons/google-drive-icon.svg';
import { ReactComponent as GoogleIcon } from '../../icons/google-icon.svg';
import { ReactComponent as BlockIcon } from '../../icons/block-icon.svg';

import { addNewVendorAction } from '../table/store/tableActions';

export const vendorCards = [
  {
    id: 0,
    vendorName: 'Box',
    vendorIcon: <BoxIcon />,
    loaded: false,
  },
  {
    id: 1,
    vendorName: 'Dropbox',
    vendorIcon: <DropboxIcon />,
    loaded: true,
  },
  {
    id: 2,
    vendorName: 'Google Drive',
    vendorIcon: <GoogleDriveIcon />,
    loaded: true,
  },
  {
    id: 3,
    vendorName: 'Sales Force',
    vendorIcon: <GoogleIcon />,
    loaded: false,
  },
];

const AddNewVendor = ({ onClose }) => {

  const dispatch = useDispatch();
  const vendors = useSelector((state) => state.tableState.tableData);
  const [ data, setData ] = useState(null);

  useEffect(() => {
    if (vendors.ids.length) {
      setData(vendors);
    }
  }, [vendors]);

  return (
    <div className="z-30 fixed top-0 right-0 bottom-0 left-0 flex flex-col justify-center items-center h-full">
      <div
        onClick={() => onClose()}
        className="
        z-30 fixed top-0 right-0 bottom-0 left-0 bg-gray-900 opacity-90 flex flex-col justify-center items-center p-2"
      />
      <div className="relative w-3/5 h-3/5 p-20 flex flex-col justify-center items-center">
        <div className="
                absolute z-40 top-0 right-0 bottom-0 left-0 flex flex-col
                justify-center items-center">
          <div
            onClick={() => onClose()}
            className="w-full flex flex-wrap justify-center items-center"
          >
            {
              vendorCards.map((card) => {
                return (
                  <div
                    key={card.id}
                    className="m-10 w-1/4 flex flex-col justify-center items-center relative"
                  >
                    {data && data.ids.some((idx) => idx === card.id) && <LoadedMask />}
                    <div
                      onClick={(e) => {
                        e.stopPropagation();
                        dispatch(addNewVendorAction(card.id));
                        onClose();
                      }}
                      className="absolute z-40 top-0 right-0 bottom-0 left-0 cursor-pointer"
                    />
                    <div className="w-40 h-40 flex flex-col justify-center items-center">
                      {card.vendorIcon}
                      <span className="font-bold mt-2">{card.vendorName}</span>
                    </div>
                  </div>
                );
              })
            }
          </div>
        </div>
      </div>
    </div>
  );
};

const LoadedMask = () => {
  return (
    <div
      className="absolute z-50 top-0 right-0 bottom-0 left-0 flex flex-col justify-center items-center
      cursor-not-allowed"
      onClick={(e) => e.stopPropagation()}
    >
      <div className="relative w-full h-full flex flex-col justify-center items-center">
        <div
          className="absolute z-60 top-0 right-0 bottom-0 left-0 bg-gray-900 opacity-90"/>
        <div
          className="absolute z-70 top-0 right-0 bottom-0 left-0 flex
          flex-col justify-center items-center"
        >
          <div className="w-20 h-20">
            <BlockIcon />
          </div>
          <span className="text-md font-bold text-center">
            Already loaded
          </span>
        </div>
      </div>
    </div>
  );
};

export default AddNewVendor;