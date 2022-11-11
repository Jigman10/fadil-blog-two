import Navbar from "./navbar";
import Home from "./home";
import Attributions from "./attributions";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Home />
      </div>
      <Attributions />
    </div>
  );
}
