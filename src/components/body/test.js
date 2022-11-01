import React from 'react';
const addresses = [
  {
    name: 'Stanhope Hotel Brussels by Thon Hotels',
    address: 'Parochiaansstraat 15/23, 1000 Brussel, Belgium',
    phone: '15231000',
  },
  {
    name: 'Pullman Brussels Centre Midi',
    address: 'Rue Duquesnoy 5, 1000 Bruxelles, Belgium',
    phone: '+3225055555',
  },
  {
    name: 'Warwick Brussels',
    address: 'Rue du Marché Aux Herbes 120, 1000 Bruxelles, Belgium',
    phone: '+3226200429',
  },
  {
    name: 'Hilton Brussels Grand Place',
    address: 'Rue de Namur 82, 1000 Bruxelles, Belgium',
    phone: '+3225489910',
  },
  {
    name: 'Aparthotel Adagio Brussels Grand Place',
    address: "Carr de l'Europe 3, 1000 Bruxelles, Belgium",
    phone: '+3225484211',
  },
  {
    name: 'Novotel Brussels off Grand Place',
    address: 'Grasmarkt, Rue du Marché Aux Herbes 100, 1000 Bruxelles, Belgium',
    phone: '+3226200427',
  },
  {
    name: 'Hotel ibis Brussels off Grand Place',
    address: 'Rue du Fossé aux Loups 47, 1000 Bruxelles, Belgium',
    phone: '+3222192828',
  },
  {
    name: 'Pillows City Hotel Brussels Centre',
    address: 'Bd Anspach 20, 1000 Bruxelles, Belgium',
    phone: '+3222129300',
  },
  {
    name: 'Hotel Chambord',
    address: 'Rue du Commerce 9, 1000 Bruxelles, Belgium',
    phone: '+3225069111',
  },
  {
    name: 'Radisson Collection Hotel, Grand Place Brussels',
    address: 'Pl. Victor Horta 1, 1060 Bruxelles, Belgium',
    phone: '+3225289800',
  },
];

export default function AddressPP() {
  return addresses.map((address) => {
    <div className='singleDetail'>
      <p className='name'>{address.name}</p>
      <p className='address'>{address.address}</p>
      <p className='phone'>{address.phone}</p>
    </div>;
  });
}
