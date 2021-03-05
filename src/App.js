import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ContactList from './pages/contactlist';
import Contactaddform from './components/contactaddform';

function App() {
  return (
    <div className="App">
      <div className="container">
        <BrowserRouter>
          <Switch>
            <Route path="/" component={ContactList} exact />
            <Route path="/addcontact" component={Contactaddform} exact />
          </Switch>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
