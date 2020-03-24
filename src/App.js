import React from 'react';
import Clock from './components/Clock'
import Toggle from './components/Toggle'
import LoggedIn from './components/LoggedIn'
import LoginControl from './components/LoginControl'
import Mailbox from './components/Mailbox'
import Page from './components/Page'

import Greetings from './components/FunctionComponent'
//import { Welcome, GoodBye } from './components/ClassComponent'
import './App.css';
const messages = ['React', 'Re: React', 'Re: Re: React'];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Page/>
        <Mailbox unreadMessages ={messages}/>
        <Toggle/>
        <LoginControl/>
        <LoggedIn isLogged={false}/>
        <LoggedIn isLogged={true}/>
        <Greetings name='J.R.' />
        <Greetings name='Manka.' />
        <Greetings name='Jazz' />
        <Greetings name='Melody' />
        <Clock/>
      </header>
    </div>
  );
}

export default App;
