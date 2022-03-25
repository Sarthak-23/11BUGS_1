// import logo from "./logo.svg";
import "./App.css";
import { ThemeChangeProvider } from "./contexts/ThemeChangeContext";
import MainComponent from "./components/MainComponent";
import { BrowserRouter } from "react-router-dom";

// App
function App() {
  return (
    <ThemeChangeProvider>
      <BrowserRouter basename="/">
        <MainComponent />
      </BrowserRouter>
    </ThemeChangeProvider>
  );
}

export default App;
