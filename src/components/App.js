import NotesPage from "../pages/NotesPage";
import { BrowserRouter, Routes, Route, Link} from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import RequireAuth from "./RequireAuth";
import SignupPage from "../pages/SignupPage";
import LogoutPage from "../pages/LogoutPage";
import WelcomePage from "../pages/WelcomePage";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <ul class = 'home1'>
        <li>
          <Link to="/welcome">Welcome</Link>
        </li>
        <li>
          <Link to="/" class = 'home2'>Home</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/signup">Signup</Link>
        </li>
        <li>
          <Link to="/logout">Logout</Link>
        </li>
      </ul>
      <Routes>
        <Route index element = {<RequireAuth><NotesPage /></RequireAuth>} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/logout" element={<LogoutPage />} />
        <Route path="/welcome" element={<WelcomePage />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App; 