function AddressSection(props) {
  return (
    <div className='singleDetail'>
      <p className='name'>${props.name}</p>
      <p className='address'>${props.address}</p>
      <p className='phone'>${props.phone}</p>
    </div>
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
export default AddressSection;
