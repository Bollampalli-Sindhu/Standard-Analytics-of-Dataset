import "./App.css";
import Home from "./pages/home/Home";
import UserList from "./pages/userList/UserList";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route path = '/analysis' element = {<UserList/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
