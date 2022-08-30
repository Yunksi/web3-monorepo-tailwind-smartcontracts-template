import React from 'react';
import { Button } from './Button';
import { WalletConnectModal } from './WalletConnectModal';
import { HiOutlineMenu } from 'react-icons/hi';

export interface INavbarProps {
  test: () => void;
}

export const Navbar: React.FC<INavbarProps> = ({ test }) => {
  return (
    <nav className='fixed top-0 right-0 z-30 h-16 w-full transition-all duration-300 sm:h-24 xl:pl-72 2xl:pl-80'>
      <div className='flex h-full items-center justify-between px-4 sm:px-6 lg:px-8 xl:px-10'>
        <div className='flex items-center'>
          <div className='mr-1 block sm:mr-3 xl:hidden'>
            <button className='text-brand relative inline-flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-full bg-transparent text-center text-xs font-medium tracking-wider outline-none transition-all focus:bg-gray-100 dark:text-white dark:hover:bg-gray-800 dark:focus:bg-gray-800 sm:h-12 sm:w-12 sm:text-sm'>
              <HiOutlineMenu className='h-auto w-6 sm:w-auto' />
            </button>
          </div>
          <div className='flex items-center'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='h-6 w-6 cursor-pointer dark:text-white'
              onClick={test}
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z'
              />
            </svg>
          </div>
        </div>

        <div className='relative order-last flex shrink-0 items-center gap-3 sm:gap-6 lg:gap-8'>
          {/* <Toggle isEnabled={true} onClick={test}>
            <span>Tset</span>
          </Toggle> */}
          <WalletConnectModal />
        </div>
      </div>
    </nav>
  );
};
