import React from 'react';
import AddressPP from './test';

export default (block) => {
  if (typeof block !== undefined) {
    return React.createElement(AddressPP);
  }
  return React.createElement(() => {
    <>
      <div>Fetching for you...</div>
    </>;
  });
};
