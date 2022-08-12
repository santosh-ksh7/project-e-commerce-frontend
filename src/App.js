import {Routes, Route} from "react-router-dom"
import About from "./components/about/About";
import CreateAccount from "./components/create-account/CreateAccount";
import Login from "./components/login/Login";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/create-account" element={<CreateAccount />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
