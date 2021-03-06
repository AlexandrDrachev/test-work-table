import React from 'react';

import { Link } from 'react-router-dom';

import { ReactComponent as HomeIcon } from '../../icons/home-icon.svg';
import { ReactComponent as TableIcon } from '../../icons/table-icon.svg';
import { ReactComponent as GithubIcon } from '../../icons/github-icon.svg';
import { ReactComponent as UpworkIcon } from '../../icons/upwork-icon.svg';
import { ReactComponent as DeveloperIcon } from '../../icons/developer-icon.svg';

const Header = () => {

  return (
    <div className="w-full px-5 h-32 border-b border-purple-700 flex justify-between items-center">
      <div className="flex">
        <Link to="/">
            <div
            className="w-12 h-12 rounded-full hover:bg-gray-900 flex justify-center items-center cursor-pointer mr-7"
          >
            <div className="w-8 h-8">
              <HomeIcon />
            </div>
          </div>
        </Link>
        <Link to="/table">
          <div className="w-12 h-12 rounded-full hover:bg-gray-900 flex justify-center items-center cursor-pointer">
            <div className="w-8 h-8 mt-2">
              <TableIcon />
            </div>
          </div>
        </Link>
      </div>
      <div className="flex flex-col w-1/4 justify-center items-start">
        <div className="flex justify-center items-center mb-2">
          <div className="w-5 h-5">
            <DeveloperIcon />
          </div>
          <span className="ml-5 font-bold text-sm">Alex Drachev</span>
        </div>
        <div className="flex justify-center items-center cursor-pointer mb-2">
          <div className="w-5 h-5">
            <UpworkIcon />
          </div>
          <a
            href="https://www.upwork.com/freelancers/~012a861fc6367091d0"
            rel="noreferrer"
            target="blank"
          >
            <span className="ml-5 font-bold text-sm">My Profile</span>
          </a>
        </div>
        <div className="flex justify-center items-center cursor-pointer mb-2">
          <div className="w-5 h-5">
            <GithubIcon />
          </div>
          <a
            href="https://github.com/AlexandrDrachev/test-work-table"
            rel="noreferrer"
            target="blank"
          >
            <span className="ml-5 font-bold text-sm">Project Code</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;