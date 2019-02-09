import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

// Redux Integration
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { store, persistor } from './redux/store';

// Views
import Home from './containers/HomeContainer';
import MerchFeed from './containers/MerchFeedContainer';
import MerchDetail from './containers/MerchDetailContainer';
import Cart from './containers/CartContainer';
import Music from './containers/MusicContainer';



const App = () => (
  <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/mycart' component={Cart} />
            <Route exact path='/store' component={MerchFeed} />
            <Route exact path='/store/:name' component={MerchDetail} />
            <Route exact path='/music' component={Music} />
          </Switch>
        </Router>
      </PersistGate>
  </Provider>
)

export default App;
