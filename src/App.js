import { Route, Switch } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { CartProvider } from './contexts/CartContext';

import './App.css';

import Layout from './Containers/Layout/Layout';
import Home from './Containers/Home/Home';
import Category from './Containers/Category/Category';
import ProductDetails from './Containers/ProductDetails/ProductDetails';
import SignIn from './Containers/SignIn/SignIn'
import SignUp from './Containers/SignUp/SignUp';
import Cart from './Containers/Cart/Cart';
import CheckOut from './Containers/CheckOut/CheckOut';

const App = () => {
  let routes = (
    <Switch>
      <Route path="/home" component={Home} />
      <Route path="/signin" component={SignIn} />
      <Route path="/signup" component={SignUp} />
      <Route path="/shopping/cart" component={Cart} />
      <Route path="/shopping/checkout" component={CheckOut} />
      <Route path="/product/:url/:id" component={ProductDetails} />
      <Route path="/:category/:subCategory" component={Category} />
      <Route path="/" component={Home} />
    </Switch>
  );

  return (
    <AuthProvider>
      <CartProvider>  
        <Layout>
          { routes }
        </Layout>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;
