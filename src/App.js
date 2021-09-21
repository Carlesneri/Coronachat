import React from 'react';
import { Switch, Route, HashRouter } from 'react-router-dom'
import Navbar from './Navbar/Navbar'
import ChatComponent from './ChatComponent/ChatComponent'
import Mapa from './Mapa/Mapa'
import './app.css'


function App() {
  return (
    <HashRouter>
      <div className="App">
        <div className="navbar-container">
          <Navbar />
        </div>
        <div className="body-layout">
          <Switch>
            <Route path='/' exact>
              <ChatComponent />
            </Route>
            {/* <Route path='/info' exact>
              <Info />
            </Route> */}
            <Route path='/mapa' exact>
              <Mapa />
            </Route>
          </Switch>
        </div>
      </div>
    </HashRouter>
  );
}

export default App;
