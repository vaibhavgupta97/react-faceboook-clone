import React from 'react';
import Posts from './Posts';
//import { Counter } from './features/counter/Counter';
import Sidebar from './Sidebar';
import './App.css';
import Header from './Header';
import Contacts from './Contacts'
function App() {
  return (
<div className="App">
<div className="app__body">
{/*header*/}
<Header />
<div className="app__mainBody">
{/*sidebar*/}
<Sidebar />
{/*App body*/}
<Posts />
{/*feed*/}
{/*widgets*/}
<Contacts />
</div>
</div>
</div>
  );
}

export default App;
