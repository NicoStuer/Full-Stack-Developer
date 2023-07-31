// eslint-disable-next-line no-unused-vars
import { useEffect, useState, useContext, createContext } from "react";
import UsersList from "./components/UsersList";
import One from "./components/One";

function App() {
  const [users, setUsers] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const url = "https://randomuser.me/api/?results=10";
  const [error, setError] = useState(false);

  const fakeError = () => {
    setError("");
  };

  useEffect(() => {
    fetch(url)
      .then((res) => {
        if (!res.ok) throw new Error();
        setError(false);
        return res.json();
      })
      .then((data) => setUsers(data.results))
      .catch((err) => setError(err));
  }, [url]);

  if (!users.length && !error) return <h2>Loading...</h2>;
  if (error)
    return (
      <>
        <h2>{error}</h2>
        <button onClick={fakeError}>Retry</button>
      </>
    );
  return (
    <>
      <h1>Data Fetching</h1>
      <UsersList users={users} />

      <One />
    </>
  );
}

export default App;
