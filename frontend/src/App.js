import React from "react";
import { BrowserRouter , Route } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";


function App() {
  return (
    <BrowserRouter forceRefresh={true}>
        <div className = "conteiner1">
            <header className="row">
                <div>
                    <a className="brand" href="/">ZEUSS</a>
                </div>
                <div>
                    <a href="/cart">sing in</a>
                    <a href="/signin">SING IN</a>
                </div>
            </header>
            <main>
                <Route path="/product/:id" component={ProductScreen}></Route>
                <Route path="/" component={HomeScreen} exact> </Route>
                               
            </main>
        </div>
    </BrowserRouter>
  );
}

export default App;
