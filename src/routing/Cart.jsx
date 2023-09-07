import React, { useContext ,useState} from "react";
 import {routingContext} from "./Call"


 export function Cart() {
  const [cartInView, setCartInView] = useState(false);

    const {cart} = useContext(routingContext)

    function slideCartIntoView() {
        setCartInView(!cartInView);
      }

    return (
      <div
        className="cart sticky"
        style={{ right: cartInView ? "0" : "-270px" }}
      >
        <div className="handle" onClick={slideCartIntoView}>
          Cart 
        </div>
        <ul className="cart-items">
          {cart.map((item, index) => {
            return (
              <li key={index}>
                {
                  <>
                    <img src={item.image} alt="Cart Product Photo" />
                    <span>{item.title}</span>
                  </>
                }
              </li>
            );
          })}
        </ul>
      </div>
    );
  }

  export default Cart