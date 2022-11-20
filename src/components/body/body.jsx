import '../../App.css';
import AddressSection from './addressSection';
import Search from './search';
import React, { useEffect, useState } from 'react';
import Error from './error';
import Loading from './loading';
import axios from 'axios';

const uid = () =>
  String(Date.now().toString(32) + Math.random().toString(16)).replace(
    /\./g,
    ''
  );

function QueryAndResult() {
  const [addressList, setAddressList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  async function fetchAddresses() {
    setLoading(true);
    try {
      const placeName = document.getElementById('myInput').value;
      const response = await axios.get(
        `http://localhost:3000/address/${placeName}`
      );

      setAddressList(response.data);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
      setError(true);
    }
  }
  useEffect(() => {}, [addressList]);
  if (loading) {
    return <Loading />;
  } else if (error) {
    return <Error />;
  } else {
    return (
      <div>
        <section className='grid-container'>
          <Search fetchAddresses={fetchAddresses} />
          <AddressSection addressList={addressList} uid={uid} />
        </section>
      </div>
    );
  }
}
export default QueryAndResult;
