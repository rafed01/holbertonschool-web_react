import React from 'react';
import Notifications from '../Notifications/Notifications.js';
import Header from '../Header/Header.js';
import Footer from '../Footer/Footer.js';
import Login from '../Login/Login.js';

function App() {
  return (

    <React.Fragment>
      <Notifications />
      <div className='App'>
      <Header />
    </div>
    <div className='App-body'>
      <Login />
    </div>
    <div className='App-footer'>
      <Footer />
    </div>
    </React.Fragment>

  );
}

export default App;
