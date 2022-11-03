import "./App.css";
import LanguageSelector from "./components/LanguageSelector";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import UserPage from "./pages/UserPage";
import { useTranslation } from "react-i18next";
import logo from "./assets/hoaxify.png";
import { BrowserRouter, Route, Link } from "react-router-dom";
import AccountActivationPage from "./pages/AccountActivationPage";
function App() {
  const { t } = useTranslation();

  return (
    <BrowserRouter>
      <nav className="navbar navbar-expand navbar-light bg-light shadow">
        <div className="container">
          <Link className="navbar-brand" to="/" title="Home">
            <img src={logo} alt="Hoaxify" width="60" />
            Hoaxify
          </Link>
          <ul className="navbar-nav">
            <Link className="nav-link" to="/signup">
              {t("signUp")}
            </Link>
            <Link className="nav-link" to="/login">
              Login
            </Link>
          </ul>
        </div>
      </nav>
      <div className="container">
        <Route exact path="/" component={HomePage} />
        <Route path="/signup" component={SignUpPage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/user/:id" component={UserPage} />
        <Route path="/activate/:token" component={AccountActivationPage} />

        <LanguageSelector />
      </div>
    </BrowserRouter>
  );
}

export default App;
