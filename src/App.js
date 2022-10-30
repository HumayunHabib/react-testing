import "./App.css";
import LanguageSelector from "./components/LanguageSelector";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import UserPage from "./pages/UserPage";

function App() {
  return (
    <div className="container">
      {window.location.pathname === "/" && <HomePage />}
      {window.location.pathname === "/signup" && <SignUpPage />}
      {window.location.pathname === "/login" && <LoginPage />}
      {window.location.pathname.startsWith("/user/") && <UserPage />}

      <LanguageSelector />
    </div>
  );
}

export default App;
