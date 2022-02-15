import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Search from "./components/Search";
import Cart from "./components/pages/Cart";
import About from "./components/pages/About";
import CartProvider from "./contex/CartProvider";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";

function App() {
  return (
    <>
      <CartProvider>
        <BrowserRouter>
          <Navbar />
          <Switch>
            <Route exact path="/">
              <div className="m-14">
                <Search />
              </div>
              <ItemListContainer />
            </Route>
            <Route path="/item/:itemId">
              <ItemDetailContainer />
            </Route>
            <Route path="/cart">
              <Cart />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/cat/:catId">
              <ItemListContainer />
            </Route>
          </Switch>
          <Footer />
        </BrowserRouter>
      </CartProvider>
    </>
  );
}

export default App;
