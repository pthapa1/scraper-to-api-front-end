// import logo from './logo.svg';
import './App.css';
import NavigationBar from './components/navigation/navbar';
import { useState } from 'react';

function App() {
  const [submenu, setSubmenu] = useState('Get-Address');
  // let submenu = 'Get-Address';
  const showNavBar = true;
  return (
    <div className='App'>
      <input
        type='text'
        onChange={(e) => {
          // submenu = e.target.value;.
          setSubmenu(e.target.value);
          // console.log(submenu);
        }}
      />
      {showNavBar ? (
        <header className='App-header'>
          <NavigationBar name='API' submenu={submenu} />
          <NavigationBar name='API V2.0' submenu='Edit-Address' />
          <NavigationBar name='API V2.0' />
        </header>
      ) : (
        <p>You can't see the navbar</p>
      )}
    </div>
  );
}

export default App;
