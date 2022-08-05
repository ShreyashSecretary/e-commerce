import React from "react";
import "./App.css";
import Admin from "./Admin";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Mens from "./components/Mens";
import Womens from "./components/Womens";
import Kids from "./components/jewellery";
import CheckOut from "./components/CheckOut";
import Profile from "./components/Profile";
import Login from "./components/Login";
import EditUser from "./components/EditUser";
import Registration from "./components/Registration";
import Products from "./components/Products/Products";
import Nav from "./components/Navigation/Nav";
import Cart from "./components/Cart/Cart";
import ViewProduct from "./components/Products/ViewProduct";
import OrderPage from "./components/Orders/OrderPage";
import OrderedItems from "./components/Orders/OrderedItems";
import UserAuthLogin from "./components/AuthLogin/UserAuthLogin";
import UserAuthRegistration from "./components/AuthLogin/UserAuthRegistration";
import Jewellery from "./components/jewellery";
import electronics from "./components/electronics";

const App = () => {
  return (
    <div>
      <Router>
        <Nav />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/shop/mens" component={Mens} exact />
          <Route
            path="/shop/mens/t-shirt"
            render={() => <Mens category="tshirt" />}
            exact
          />
          <Route
            path="/shop/mens/shirt"
            render={() => <Mens category="shirt" />}
            exact
          />
          <Route
            path="/shop/mens/jeans"
            render={() => <Mens category="jeans" />}
            exact
          />
          <Route
            path="/shop/mens/shoes"
            render={() => <Mens category="shoes" />}
            exact
          />
          <Route path="/shop/womens" component={Womens} exact />
          <Route
            path="/shop/womens/t-shirt"
            render={() => <Womens category="tshirt" />}
            exact
          />
          <Route
            path="/shop/womens/shirt"
            render={() => <Womens category="shirt" />}
            exact
          />
          <Route
            path="/shop/womens/jeans"
            render={() => <Womens category="jeans" />}
            exact
          />
          <Route
            path="/shop/womens/shoes"
            render={() => <Womens category="shoes" />}
            exact
          />

          <Route path="/shop/jewellery" component={Jewellery} exact />
          <Route path="/shop/electronics" component={electronics} exact />

          <Route path="/shop/profile" component={Profile} exact />
          <Route path="/shop/profile/login" component={Login} exact />
          <Route
            path="/shop/profile/registration"
            component={Registration}
            exact
          />
          <Route path="/shop/products" component={Products} exact />
          <Route path="/shop/cart" component={Cart} exact />
          <Route path="/shop/viewProduct" component={ViewProduct} exact />
          <Route path="/shop/checkout" component={CheckOut} exact />
          <Route path="/shop/orders" component={OrderPage} exact />
          <Route path="/shop/editUser" component={EditUser} exact />
          <Route path="/shop/orderedItems" component={OrderedItems} exact />
          <Route path="/shop/admin" component={Admin} exact />
          <Route path="/shop/authLogin" component={UserAuthLogin} exact />
          <Route
            path="/shop/authRegister"
            component={UserAuthRegistration}
            exact
          />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
