import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ContactList from './components/contactlist';
import Contactaddform from './components/contactaddform';
import Contacteditform from './components/contacteditform';

function App() {
  return (
    <div className="App">
      <div className="container">
        <BrowserRouter>
          <Switch>
            <Route path="/" component={ContactList} exact />
            <Route path="/addcontact" component={Contactaddform} exact />
            <Route path="/editcontact/:id" component={Contacteditform} />
          </Switch>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
