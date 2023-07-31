/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from "react";

// eslint-disable-next-line react/prop-types
export const Greeting = ({ tittle, name = "User" }) => {
  return (
    <h1>
      {tittle}, dice {name}
    </h1>
  );
};

export function UserCard({name, amount, married, address, greet}) {
  console.log(name, amount, married, address, greet)
  return (
    <>
      <h1>{name}</h1>
      <p>${amount}</p>
      <p>{married ? "Married" : "Single"}</p>
      <ul>
        <li>City: {address.city}</li>
        <li>Address: {address.street}</li>
      </ul>
    </>
  );
}
