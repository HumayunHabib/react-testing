import "./App.css";
import LanguageSelector from "./components/LanguageSelector";
import SignUpPage from "./pages/SignUpPage";

function App() {
  return (
    <div className="container">
      <SignUpPage />
      <LanguageSelector />
    </div>
  );
}

export default App;
