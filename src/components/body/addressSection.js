// import { useState, useEffect } from 'react';
import React from 'react';

function AddressSection(addresses) {
  // const [addresses, setAddresses] = useState([]);
  // const placeName = document.getElementById('myInput').value;
  // const placeName = props;
  // const elementFromTemplate = (html) => {
  //   const template = document.createElement('template');
  //   template.innerHTML = html.trim();
  //   return template.content.firstElementChild;
  // };
  // const addressContainer = document.getElementById('address-container');

  // useEffect(() => {
  //   fetch(`http://localhost:3000/address/${placeName}`, { method: 'GET' })
  //     .then((res) => {
  //       if (res.ok) {
  //         return res.json(); /* .then((json) => {
  //           setAddresses(json);
  //         }); */
  //       }
  //       throw res;
  //     })
  //     .then((json) => {
  //       setAddresses(json);
  //     })
  //     .catch((err) => {
  //       const myElementlist = elementFromTemplate(`
  //       <div class="singleDetail">
  //       <p class="message">${err}: Please Input a Valid Name. Special Characters and Empty Spaces Are Not Allowed in the Search Box.  </p>
  //       </div>
  //     `);
  //       addressContainer.appendChild(myElementlist);
  //     });
  // }, []);
  return (
    <>
      {addresses.map((location) => {
        <div className='singleDetail'>
          <p className='name'>${location.name}</p>
          <p className='address'>${location.address}</p>
          <p className='phone'>${location.phone}</p>
        </div>;
      })}
    </>
  );
}
// function ErrorSection(props) {
//   return (
//     <div className='singleDetail'>
//       <p className='message'>
//         ${err}: Please Input a Valid Name. Special Characters and Empty Spaces
//         Are Not Allowed in the Search Box.{' '}
//       </p>
//     </div>
//   );
// }

// addresses.map((address) => {
//   <div className='singleDetail'>
//     <p className='name'>${address.name}</p>
//     <p className='address'>${address.address}</p>
//     <p className='phone'>${address.phone}</p>
//   </div>;
// });
export default AddressSection;
