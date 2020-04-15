import React from "react";

import Button from "../../UI/Button/Button";

const orderSummary = (props) => {
  const ingredientSummary = Object.keys(props.ingredients).map((igKey) => {
    return (
      <li key={igKey}>
        <span style={{ textTransform: "capialize" }}>{igKey}</span>:{" "}
        {props.ingredients[igKey]}{" "}
      </li>
    );
  });
  return (
    <>
      <h3>Your Order</h3>
      <p>A Delicious Burger With:</p>
      <ul>{ingredientSummary}</ul>
      <p>
        <strong>Total Price: {props.price.toFixed(2)}</strong>
      </p>
      <Button btnType='Danger' clicked={props.purchaseCancelled}>
        CANCEL
      </Button>
      <Button btnType='Success' clicked={props.purchaseContinued}>
        CONTINUE
      </Button>
    </>
  );
};

export default orderSummary;
