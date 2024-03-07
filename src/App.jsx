import "./App.css";
import Breadcrumps from "./components/Breadcrumps";
import Navbar from "./components/Navbar";
import Sentiment from "./components/Sentiment";
import TradingChart from "./components/TradingChart";

function App() {
  return (
    <div className="bg-[#eff2f5]">
      <Navbar />
      <Breadcrumps />
      <TradingChart />
      <Sentiment />
    </div>
  );
}

export default App;
