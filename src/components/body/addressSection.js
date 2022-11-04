// import { useState, useEffect } from 'react';
import React from 'react';

function AddressSection({ addresses }) {
  addresses.map((location) => {
    return (
      <div className='singleDetail'>
        <p className='name'>${location.name}</p>
        <p className='address'>${location.address}</p>
        <p className='phone'>${location.phone}</p>
      </div>
    );
  });
}

export default AddressSection;
