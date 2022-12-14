import React from 'react';

function Error() {
  return (
    <div className='error-container' role='alert' aria-label='error message'>
      <p className='error'>
        There was an error processing your request. Please try again without any
        special characters!
      </p>
    </div>
  );
}

export default Error;
