import "./App.css";
import Header from "./components/Header";
import UserList from "./components/UserList";

function App() {
  return (
    <>
      <Header />
      <div className="App">
        <UserList />
      </div>
    </>
  );
}

export default App;
