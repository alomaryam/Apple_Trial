import "./App.css";
import Navbar from "./Navbar";
import "./Styles/FontAwesomeIcon";
import Slideshow from "./components/Slideshow.js";
import Body from "./components/Body.js";
import GlobalStyle from "./Styles/GlobalStyling.js";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Navbar />
      <Body />
      <Slideshow />
    </div>
  );
}

export default App;
