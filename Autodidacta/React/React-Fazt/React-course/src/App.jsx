// import Button from "./components/Button";
// // eslint-disable-next-line no-unused-vars
// import { Greeting, UserCard } from "./components/Greeting";
// import Posts from "./components/Posts";
// // eslint-disable-next-line no-unused-vars
// import Product, { Navbar } from "./components/Product";
// import { TaskCard } from "./components/Task";
import React, { useState, useEffect } from "react";

function App() {
  // const users = [
  //   {
  //     id: 1,
  //     name: "Rayan Ray",
  //     image: "https://robohash.org/user1",
  //   },
  //   {
  //     id: 2,
  //     name: "Joe",
  //     image: "https://robohash.org/user2",
  //   },
  //   {
  //     id: 3,
  //     name: "Nico",
  //     image: "https://robohash.org/user3",
  //   },
  // ];

  function Counter() {
    const [message, setMessage] = useState("");
    const [counter, setCounter] = useState(0);

    useEffect(() => {
      console.log("render");
    }, [counter]);

    return (
      <div>
        <input onChange={(e) => setMessage(e.target.value)} />
        <button onClick={() => alert("The message is:" + message)}>Save</button>
        <hr />
        <h1>Counter: {counter}</h1>
        <button onClick={() => setCounter(counter + 1)}>Add</button>
      </div>
    );
  }

  return (
    <>
      <Counter />

      {/* {users.map((user, i) => {
        return (
          <div key={i}>
            <h1>{user.name}</h1>
            <img src={user.image}/>
          </div>
        );
      })} */}

      {/* <Posts /> */}

      {/* <TaskCard ready={false} />
      <Button text="Click me" />
      <Button text="Pay" />
      <Button text="Hello world" name="Joe" />
      
      <form onSubmit={(e) => {
        e.preventDefault()
        console.log("Sending form")
      }}>
        <h1>Registro de usuario</h1>
        <button>Send</button>
      </form> */}

      {/* <UserCard
        name="Ryan Ray"
        amount={3000}
        married={true}
        points={[99, 33.3, 22.2]}
        address={{
          street: "123 Main Street",
          city: "New York",
        }}
        greet={function () {
          alert("Hello");
        }}
      />
      <UserCard
        name="Joe Mcmillan"
        amount={1000}
        married={false}
        points={[100, 20]}
        address={{
          street: "Av Some 123",
          city: "New York",
        }}
      /> */}
    </>
  );
}

export default App;
