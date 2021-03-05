import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ContactList from './pages/contactlist';
import Addcontact from './pages/addcontact';

function App() {
  return (
    <div className="App">
      <div className="container">
        <p>This is the main page</p>
        <BrowserRouter>
          <Switch>
            <Route path="/" component={ContactList} exact />
            <Route path="/addcontact" component={Addcontact} exact />
          </Switch>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
