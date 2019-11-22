import "./App.css";
import React, { useState, useEffect } from "react";
import FormTitle from "./components/FormTitle";
import Pages from "./components/Pages";

export default function App() {
  // const [completedPages, setCompletedPages] = useState([true, false, false]);
  // Use this when you want to enable all pages
  const [completedPages, setCompletedPages] = useState([true, true, true]);

  const isCompleted = index => {
    if (index < 0) {
      return false;
    }

    return completedPages[index];
  };

  return (
    <div className="App">
      <div className="App-Content">
        <div>
          <FormTitle>Checkout</FormTitle>
          <form className="CheckoutForm">
            <Pages validatePage={isCompleted}>
              {/* Pick your part */}
              <div id="CheckoutForm-BasicInfo">aaaa</div>
              <div id="CheckoutForm-AddressInfo">bbb</div>
              <div id="CheckoutForm-PaymentInfo">ccc</div>
            </Pages>
          </form>
        </div>
      </div>
    </div>
  );
}
