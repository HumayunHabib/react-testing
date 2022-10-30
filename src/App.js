import "./App.css";
import LanguageSelector from "./components/LanguageSelector";
import HomePage from "./pages/HomePage";
import SignUpPage from "./pages/SignUpPage";

function App() {
  return (
    <div className="container">
      {window.location.pathname === "/" && <HomePage />}
      {window.location.pathname === "/signup" && <SignUpPage />}
      <LanguageSelector />
    </div>
  );
}

export default App;
