import React from 'react';
import Header from './Header/Header';
import Body from './Body/Body';
import Summary from './Footer/Summary'
import accounts from './Data/data'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootswatch/dist/lumen/bootstrap.min.css'

function App() {
  return (
    <div>
     <Header />
     <Body accounts ={accounts} />
     <Summary accounts ={accounts} />
    </div>
  );
}

export default App;
