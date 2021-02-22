import { Route, Switch } from 'react-router-dom';
import './App.css';

import Layout from './Containers/Layout/Layout';
import Home from './Containers/Home/Home';
import Category from './Containers/Category/Category';
import ProductDetails from './Containers/ProductDetails/ProductDetails';

const App = () => {
  let routes = (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/product/:id" component={ProductDetails} />
      <Route path="/supplies" component={Category} />
      <Route path="/computer" component={Category} />
      <Route path="/electronics" component={Category} />
      <Route path="/gaming" component={Category} />
      <Route path="/categories" component={Category} />
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
