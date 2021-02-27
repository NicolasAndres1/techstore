import { Route, Switch } from 'react-router-dom';
import { firebaseAuth } from './Config/firebaseConfig';

import './App.css';

import Layout from './Containers/Layout/Layout';
import Home from './Containers/Home/Home';
import Category from './Containers/Category/Category';
import ProductDetails from './Containers/ProductDetails/ProductDetails';
import SignIn from './Containers/SignIn/SignIn'
import SignUp from './Containers/SignUp/SignUp';

const App = () => {
  let routes = (
    <Switch>
      <Route path="/home" component={Home} />
      <Route path="/signin" component={SignIn} />
      <Route path="/signup" component={SignUp} />
      <Route path="/product/:url/:id" component={ProductDetails} />
      <Route path="/category/:category" component={Category} />
      <Route path="/" component={Home} />
    </Switch>
  );

  return (
    <div>
      <Layout>
        { routes }
      </Layout>
    </div>
  );
}

export default App;
