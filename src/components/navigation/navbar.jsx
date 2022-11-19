import '../../App.css';

function NavigationBar() {
  return (
    <>
      <nav className='navigation' aria-label='Find Address'>
        <ul>
          <a href='/'>
            <li className='title'>Search The Address</li>
          </a>
        </ul>
      </nav>
    </>
  );
}
export default NavigationBar;
