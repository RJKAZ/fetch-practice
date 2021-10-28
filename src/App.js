import './App.css';
import { Fragment } from 'react/cjs/react.production.min';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import AdviceApi from './components/AdviceApi';


function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <Switch>
          <div>
            <h1>Testing</h1>
            <ul>
            <li>
            <Route path='/adviceapi' component={AdviceApi}/>
            <Link to="/adviceapi">Advice Api</Link> 

            </li>
          </ul>
          </div>
          
          
          
          
        </Switch>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;