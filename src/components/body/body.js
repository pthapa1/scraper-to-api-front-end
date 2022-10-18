import '../../App.css';

function QueryAndResult() {
  return (
    <>
      <section className='grid-container'>
        <div className='grid-item'>
          <input
            type='text'
            placeholder='Enter Place Name..'
            id='myInput'
            className='grid-item'
          />
        </div>
        <div className='grid-item'>
          <p>Here is the result</p>
        </div>
      </section>
    </>
  );
}
export default QueryAndResult;
