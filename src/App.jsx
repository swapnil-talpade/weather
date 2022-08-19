import "./App.css";
import Inputs from "./components/Inputs";
import TemperatureDetails from "./components/TemperatureDetails";
import TimeAndLocation from "./components/TimeAndLocation";
import TopButtons from "./components/TopButtons";

function App() {
  return (
    <div className="mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br from-cyan-700 to-blue-700 h-fit shadow-xl">
      <TopButtons />
      <Inputs />
      <TimeAndLocation />
      <TemperatureDetails />
    </div>
  );
}

export default App;
