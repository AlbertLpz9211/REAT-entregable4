import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import UsersList from "./components/UsersList";
import UsersForm from "./components/UsersForm";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <UsersForm />
      <UsersList />
    </div>
  );
}

export default App;
