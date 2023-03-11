import "./App.css"
import Home from "./pages/Home/Home"
function App() {
  return (
    <div className="App">
      <div className="blur" style={{top: '-12%', right:"0rem"}}></div>
      <div className="blur" style={{top: '50%', left:"-2rem"}}></div>
      <Home/>
    </div>
  );
}

export default App;
