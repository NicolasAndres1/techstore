import { Route, Switch } from 'react-router-dom';
import './App.css';

import Layout from './Containers/Layout/Layout';
import Home from './Containers/Home/Home';
import Category from './Containers/Category/Category';
import ProductDetails from './Containers/ProductDetails/ProductDetails';

const App = () => {
  let routes = (
    <Switch>
      <Route path="/home" component={Home} />
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
