import React from 'react';

const NotFound = () => {
  return (
    <>
      <div className='flex items-center justify-center'>
        <div className='flex items-start space-y-3 sm:flex-row sm:items-center sm:space-y-0 sm:space-x-3'>
          <p className='text-9xl font-semibold text-red-600'>404</p>
        </div>
      </div>
    </>
  );
};

NotFound.displayName = 'Test';

export default NotFound;
