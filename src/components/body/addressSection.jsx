import React from 'react';

export default function addressSection({ addressList, uid }) {
  return (
    <div id='address-container' className='grid-item address-details'>
      {addressList.length >= 1 ? (
        addressList
          .filter((obj) => obj.hasOwnProperty('name'))
          .map((location) => {
            return (
              <div
                className='singleDetail'
                key={uid()}
                role='note'
                aria-label='address container'
              >
                <p className='name' role='note' aria-label='business name'>
                  {location.name}
                </p>
                <p
                  className='address'
                  role='note'
                  aria-label='business address'
                >
                  {location.address}
                </p>
                <p className='phone' role='note' aria-label='business phone'>
                  {location.phone}
                </p>
              </div>
            );
          })
      ) : (
        <p>Please type place name in the search box. </p>
      )}
    </div>
  );
}
