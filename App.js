import './App.css';
import UilReact from '@iconscout/react-unicons/icons/uil-react'
import NavBar from './components/NavBar';
import Inputs from './components/Inputs';
import TimeLocation from './components/TimeLocation';
import Temperatures from './components/Temperatures';
import Forecasts from './components/Forecasts';

function App() {
  return (
  <div className="mx-auto max-w-screen-xl my-10 py-5 px-32 bg-gradient-to-br from-gray-500 to-slate-700 h-fit shadow-xl shadow-gray-400">
    <NavBar />
    <Inputs />

    <TimeLocation />
    <Temperatures/>

    <Forecasts title={"hourly forecast"}/>
    <Forecasts title={"Daily forecast"}/>
  </div>
  );
}

export default App;
