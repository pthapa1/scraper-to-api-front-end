import '../../App.css';
import AddressSection from '../body/addressSection';
import React, { useEffect, useState } from 'react';

function QueryAndResult() {
  const [getAddress, setGetAddress] = useState([]);

  const completeAddress = () => {
    const elementFromTemplate = (html) => {
      const template = document.createElement('template');
      template.innerHTML = html.trim();
      return template.content.firstElementChild;
    };
    const addressContainer = document.getElementById('address-container');
    const placeName = document.getElementById('myInput').value;

    fetch(`http://localhost:3000/address/${placeName}`, { method: 'GET' })
      .then((res) => {
        // if (!res.ok) {
        //   throw new Error(`HTTP error ${res.status}`);
        // } else {
        //   return res.json();
        // }
        if (res.ok) {
          return res.json().then((json) => console.log(json));
        }
        throw res;
      })
      .then((data) => {
        setGetAddress(data);
        console.log(`This is a list: ${getAddress}`);
        getAddress.forEach((location) => {
          // const myElementList = elementFromTemplate(`
          //     <div class="singleDetail">
          //     <p class="name">${location.name}</p>
          //     <p class="address">${location.address}</p>
          //     <p class="phone">${location.phone}</p>
          // </div>`);
          // const myElementList = <AddressSection />;

          /* location && */ addressContainer.appendChild(
            <AddressSection location={location} />
          );
        });
      })
      .catch((err) => {
        const myElementlist = elementFromTemplate(`
        <div class="singleDetail">
        <p class="message">${err}: Please Input a Valid Name. Special Characters and Empty Spaces Are Not Allowed in the Search Box.  </p>
        </div>
      `);
        addressContainer.appendChild(myElementlist);
      });
  };
  useEffect(() => {
    document
      .querySelector('#search-btn')
      .addEventListener('click', completeAddress);
  }, []);
  return (
    <>
      <section className='grid-container'>
        <div className='grid-item search'>
          <input
            type='text'
            placeholder='Search..'
            id='myInput'
            className='grid-item'
          />
          <button id='search-btn' onClick={completeAddress}>
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
        <div id='address-container' className='grid-item address-details'></div>
      </section>
    </>
  );
}
export default QueryAndResult;
