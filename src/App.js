import React, { useState } from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Base from "./components/Base";
import Toppings from "./components/Toppings";
import Order from "./components/Order";
import Modal from "./components/Modal";
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();
  const [burger, setBurger] = useState({ base: "", toppings: [] });
  const [showModal, setShowModal] = useState(false);

  const addBase = (base) => {
    setBurger({ ...burger, base });
  };

  const addTopping = (topping) => {
    let newToppings;
    if (!burger.toppings.includes(topping)) {
      newToppings = [...burger.toppings, topping];
    } else {
      newToppings = burger.toppings.filter((item) => item !== topping);
    }
    setBurger({ ...burger, toppings: newToppings });
  };

  return (
    <>
      <Header />

      <Modal showModal={showModal} setShowModal={setShowModal} />

      <AnimatePresence
        exitBeforeEnter
        onExitComplete={() => setShowModal(false)}
      >
        <Switch location={location} key={location.key}>
          <Route path="/base">
            <Base addBase={addBase} burger={burger} />
          </Route>
          <Route path="/toppings">
            <Toppings addTopping={addTopping} burger={burger} />
          </Route>
          <Route path="/order">
            <Order burger={burger} setShowModal={setShowModal} />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </AnimatePresence>
    </>
  );
}

export default App;
