import './App.css';
import { Fragment } from 'react/cjs/react.production.min';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import AdviceApi from './components/AdviceApi';
import CvsTest from './components/CvsTest';
import Photos from './components/Photos';
import Planets from './components/Planets';
import Random from './components/Random';
import Activity from './components/Activity';
import DisneyApi from './components/DisneyApi';

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
              <li>
                <Route path='/planets' component={Planets} />
                <Link to='/planets'>Planets</Link>
              </li>
              <li>
                <Route path='/placeholder' component={Random} />
                <Link to='/placeholder'>Random</Link>
              </li>
              <li>
                <Route path='/activity' component={Activity} />
                <Link to='/activity'>Activity</Link>
              </li>
              <li>
                <Route path='/disney' component={DisneyApi} />
                <Link to='/disney'>Disney</Link>
              </li>
            </ul>
          </div>
        </Switch>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
