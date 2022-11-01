import React from 'react';

function Error(error) {
  return (
    <>
      <div className='singleDetail'>
        <p className='message'>{error}</p>
        <br />
        <p>Note: Special Characters and Empty Spaces are not allowed</p>
      </div>
    </>
  );
}

export default Error;
