import '../../App.css';
import AddressSection from '../body/addressSection';
import React, { useEffect, useState } from 'react';
import { ReactDOM } from 'react';
import { createRoot } from 'react-dom/client';
import Error from './error';
import axios from 'axios';

// container that we need to append the results to
const addressContainer = document.getElementById('address-container');
//experiment
// const addressArray = [];
function QueryAndResult() {
  const [addressList, setAddressList] = useState([]);
  // const [loaading, setLoading] = useState(false);
  // const [error, setError] = useState(false);

  async function fetchAddresses() {
    try {
      const placeName = document.getElementById('myInput').value;
      const response = await axios.get(
        `http://localhost:3000/address/${placeName}`
      );

      console.log(response.data);
      setAddressList(response.data);
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {
    const preAddressArray = JSON.stringify(addressList);
    // console.log(`${JSON.stringify(addressList)}`);
    console.log(preAddressArray);
    // // Experiment
    // addressArray.push(preAddressArray);
    // console.log(`This is addressArray: ${addressArray}`);

    console.log(`This is addressList Object: ${addressList}`);
  }, [addressList]);

  return (
    <div>
      <section className='grid-container'>
        <div className='grid-item search'>
          <input
            type='text'
            placeholder='Search..'
            id='myInput'
            className='grid-item'
          />
          <button id='search-btn' onClick={fetchAddresses}>
            <svg
              stroke='currentColor'
              fill='currentColor'
              strokeWidth='0'
              viewBox='0 0 1024 1024'
              height='1.5em'
              width='1.5em'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path d='M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0 0 11.6 0l43.6-43.5a8.2 8.2 0 0 0 0-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z'></path>
            </svg>
          </button>
        </div>
        <div id='address-container' className='grid-item address-details'>
          {addressList.length > 1 ? (
            // addressList.map((address) => {
            //   <div className='singleDetail'>
            //     <p className='name'>{address.name}</p>
            //     <p className='address'>{address.address}</p>
            //     <p className='phone'>{address.phone}</p>
            //   </div>;
            // })
            //TODO: map over the object.
            Object.keys(addressList).forEach((address) => {
              return (
                <div className='singleDetail'>
                  <p className='name'>{address.name}</p>
                  <p className='address'>{address.address}</p>
                  <p className='phone'>{address.phone}</p>
                </div>
              );
            })
          ) : (
            // <AddressSection addresses={getAddress} />
            <p>Please type in Place name in the search bar... </p>
          )}
        </div>
      </section>
    </div>
  );
}
export default QueryAndResult;
