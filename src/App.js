import './App.css';
import { Fragment } from 'react/cjs/react.production.min';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import AdviceApi from './components/AdviceApi';
import CvsTest from './components/CvsTest';
import Photos from './components/Photos';

function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <Switch>
          <div>
            <h1>Testing</h1>
            <ul>
              <li>
                <Route path='/adviceapi' component={AdviceApi} />
                <Link to='/adviceapi'>Advice Api</Link>
              </li>
              <li>
                <Route path='/cvs' component={CvsTest} />
                <Link to='/cvs'>CVS Test</Link>
              </li>
              <li>
                <Route path='/photo' component={Photos} />
                <Link to='/photo'>Photos</Link>
              </li>
            </ul>
          </div>
        </Switch>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
