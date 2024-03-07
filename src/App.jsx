import "./App.css";
import Breadcrumps from "./components/Breadcrumps";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="h-screen bg-[#eff2f5]">
      <Navbar />
      <Breadcrumps />
    </div>
  );
}

export default App;
