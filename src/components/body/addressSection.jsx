import React from 'react';

export default function addressSection({ addressList, uid }) {
  return (
    <div id='address-container' className='grid-item address-details'>
      {addressList.length > 1 ? (
        addressList
          .filter((obj) => obj.hasOwnProperty('name'))
          .map((location) => {
            return (
              <div className='singleDetail' key={uid()}>
                <p className='name'>{location.name}</p>
                <p className='address'>{location.address}</p>
                <p className='phone'>{location.phone}</p>
              </div>
            );
          })
      ) : (
        <p>Please type in Place name in the search bar... </p>
      )}
    </div>
  );
}
