import React from 'react';

import { ReactComponent as BoxIcon } from '../icons/box-icon.svg';
import { ReactComponent as DropboxIcon } from '../icons/dropbox-icon.svg';
import { ReactComponent as GoogleDriveIcon } from '../icons/google-drive-icon.svg';
import { ReactComponent as GoogleIcon } from '../icons/google-icon.svg';

export const dummyVendors = [
  {
    vendorName: 'Box',
    vendorIcon: <BoxIcon />,
    overallScore: {
      label: 'Overall Score',
      value: 6,
    },
    findingHistory: {
      label: 'Finding History',
      value: 'Total funding $170m',
    },
    findingHistoryProps: [
      {
        propName: 'founded',
        value: [2005],
      },
      {
        propName: 'Key Investors',
        value: ['DFG', 'Scale Venture Partners'],
      },
      {
        propName: 'Founders',
        value: ['Aeron Levie', 'Dylon Smith'],
      },
    ],
    companyInfo: {
      label: 'Company Info',
      value: 'www.box.com',
    },
    companyInfoProps: [
      {
        propName: 'property 1',
        value: ['value 1, value2'],
      },
      {
        propName: 'property 2',
        value: ['value 3, value 4'],
      },
      {
        propName: 'property 3',
        value: ['value 5, value 6'],
      },
    ],
    features: {
      label: 'Features',
      value: '6 different features present',
    },
    featuresProps: [
      {
        propName: 'property 4',
        value: ['value 7', 'value 8'],
      },
      {
        propName: 'property 5',
        value: ['value 9', 'value 10'],
      },
      {
        propName: 'property 6',
        value: ['value 11', 'value 12'],
      },
    ],
    customerCaseStudies: {
      label: 'Customer Case Studies',
      value: '2 customer case studies present',
    },
    customerCaseStudiesProps: [
      {
        propName: 'property 7',
        value: ['value 11', 'value 12'],
      },
      {
        propName: 'property 8',
        value: ['value 13', 'value 14'],
      },
      {
        propName: 'property 9',
        value: ['value 15', 'value 16'],
      },
      {
        propName: 'property 10',
        value: ['value 17', 'value 18'],
      },
    ],
  },
  {
    vendorName: 'Dropbox',
    vendorIcon: <DropboxIcon />,
    overallScore: {
      label: 'Overall Score',
      value: 6.1,
    },
    findingHistory: {
      label: 'Finding History',
      value: 'Total funding $150m',
    },
    findingHistoryProps: [
      {
        propName: 'founded',
        value: [2007],
      },
      {
        propName: 'Key Investors',
        value: ['Index Ventures', 'Sequoia'],
      },
      {
        propName: 'Founders',
        value: ['Arash Ferdoswi'],
      },
    ],
    companyInfo: {
      label: 'Company Info',
      value: 'www.dropbox.com',
    },
    companyInfoProps: [
      {
        propName: 'property 1',
        value: ['value 1, value2'],
      },
      {
        propName: 'property 2',
        value: ['value 3, value 4'],
      },
      {
        propName: 'property 3',
        value: ['value 5, value 6'],
      },
    ],
    features: {
      label: 'Features',
      value: '6 different features present',
    },
    featuresProps: [
      {
        propName: 'property 4',
        value: ['value 7', 'value 8'],
      },
      {
        propName: 'property 5',
        value: ['value 9', 'value 10'],
      },
      {
        propName: 'property 6',
        value: ['value 11', 'value 12'],
      },
    ],
    customerCaseStudies: {
      label: 'Customer Case Studies',
      value: '1 customer case studies present',
    },
    customerCaseStudiesProps: [
      {
        propName: 'property 7',
        value: ['value 11', 'value 12'],
      },
      {
        propName: 'property 8',
        value: ['value 13', 'value 14'],
      },
      {
        propName: 'property 9',
        value: ['value 15', 'value 16'],
      },
      {
        propName: 'property 10',
        value: ['value 17', 'value 18'],
      },
    ],
  },
  {
    vendorName: 'Google Drive',
    vendorIcon: <GoogleDriveIcon />,
    overallScore: {
      label: 'Overall Score',
      value: 4.5,
    },
    findingHistory: {
      label: 'Finding History',
      value: 'Total funding $36.1m',
    },
    findingHistoryProps: [
      {
        propName: 'founded',
        value: [1998],
      },
      {
        propName: 'Key Investors',
        value: ['Sequoia', 'Kleiner', 'Index Ventures'],
      },
      {
        propName: 'Founders',
        value: ['Larry Page', 'Sergey Bin'],
      },
    ],
    companyInfo: {
      label: 'Company Info',
      value: 'www.google.com',
    },
    companyInfoProps: [
      {
        propName: 'property 1',
        value: ['value 1, value2'],
      },
      {
        propName: 'property 2',
        value: ['value 3, value 4'],
      },
      {
        propName: 'property 3',
        value: ['value 5, value 6'],
      },
    ],
    features: {
      label: 'Features',
      value: '6 different features present',
    },
    featuresProps: [
      {
        propName: 'property 4',
        value: ['value 7', 'value 8'],
      },
      {
        propName: 'property 5',
        value: ['value 9', 'value 10'],
      },
      {
        propName: 'property 6',
        value: ['value 11', 'value 12'],
      },
    ],
    customerCaseStudies: {
      label: 'Customer Case Studies',
      value: '3 customer case studies present',
    },
    customerCaseStudiesProps: [
      {
        propName: 'property 7',
        value: ['value 11', 'value 12'],
      },
      {
        propName: 'property 8',
        value: ['value 13', 'value 14'],
      },
      {
        propName: 'property 9',
        value: ['value 15', 'value 16'],
      },
      {
        propName: 'property 10',
        value: ['value 17', 'value 18'],
      },
    ],
  },
  {
    vendorName: 'Sales Force',
    vendorIcon: <GoogleIcon />,
    overallScore: {
      label: 'Overall Score',
      value: 6.2,
    },
    findingHistory: {
      label: 'Finding History',
      value: 'Total funding $756.1m',
    },
    findingHistoryProps: [
      {
        propName: 'founded',
        value: [2002],
      },
      {
        propName: 'Key Investors',
        value: ['Sequoia', 'Larry Page'],
      },
      {
        propName: 'Founders',
        value: ['Kleiner', 'Sergey Bin'],
      },
    ],
    companyInfo: {
      label: 'Company Info',
      value: 'www.google.com',
    },
    companyInfoProps: [
      {
        propName: 'property 1',
        value: ['value 1, value2'],
      },
      {
        propName: 'property 2',
        value: ['value 3, value 4'],
      },
      {
        propName: 'property 3',
        value: ['value 5, value 6'],
      },
    ],
    features: {
      label: 'Features',
      value: '5 different features present',
    },
    featuresProps: [
      {
        propName: 'property 4',
        value: ['value 7', 'value 8'],
      },
      {
        propName: 'property 5',
        value: ['value 9', 'value 10'],
      },
      {
        propName: 'property 6',
        value: ['value 11', 'value 12'],
      },
    ],
    customerCaseStudies: {
      label: 'Customer Case Studies',
      value: '4 customer case studies present',
    },
    customerCaseStudiesProps: [
      {
        propName: 'property 7',
        value: ['value 11', 'value 12'],
      },
      {
        propName: 'property 8',
        value: ['value 13', 'value 14'],
      },
      {
        propName: 'property 9',
        value: ['value 15', 'value 16'],
      },
      {
        propName: 'property 10',
        value: ['value 17', 'value 18'],
      },
    ],
  },
];