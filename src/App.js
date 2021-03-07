import { useContext } from 'react';
import { Route, Switch } from 'react-router-dom';
import { AuthContext } from './contexts/AuthContext';
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
import ProtectedRoute from './hoc/ProtectedRoute';
import UserLoguedRoute from './hoc/UserLoguedRoute';

const App = () => {
  const [user, setUser] = useContext(AuthContext);

  let routes = (
    <Switch>
      <Route path="/home" component={Home} />
      <UserLoguedRoute path="/signin" component={SignIn} />
      <UserLoguedRoute path="/signup" component={SignUp} />
      <Route path="/shopping/cart" component={Cart} />
      <ProtectedRoute path="/shopping/checkout" component={CheckOut} />
      <Route path="/product/:url/:id" component={ProductDetails} />
      <Route path="/:category/:subCategory" component={Category} />
      <Route path="/" component={Home} />
    </Switch>
  );

  return (
      <CartProvider>  
        <Layout>
          { routes }
        </Layout>
      </CartProvider>
  );
}

export default App;
