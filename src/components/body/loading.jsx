import React from 'react';

function loading() {
  return (
    <section className='loading-center'>
      <div
        className='loading'
        role='alert'
        aria-busy='true'
        aria-label='loading content'
      ></div>
    </section>
  );
}

export default loading;
