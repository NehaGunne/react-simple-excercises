import ButtonCounter from "./components/ButtonCounter";
import ButtonCounter2 from "./components/ButtonCounter2";
import HOCCounter2 from "./components/HOCCounter2";
import HOCcounter from "./components/HOCcounter";
import Pagination from "./components/Pagination";
import ReduxCounter from "./components/ReduxCounter";
import SyntheticEvent from "./components/SyntheticEvent";

import CounterContextProvider from "./context/CounterContextProvider";
import './App.css'

import Timer from "./components/Timer";
import Star from "./components/Star";
import Accordion from "./components/Accordion/Accordion";
import { Routes,Route } from "react-router-dom";
import StarMatchComponent from "./components/Star-match-game/StarMatchComponent";
const arr = [
  { label: "acc1", summary: "In this article, you created a simple reusable accordion component with sections that can be toggled open and closed.In this article, you created a simple reusable accordion component with sections that can be toggled open and closed.In this article, you created a simple reusable accordion component with sections that can be toggled open and closed." },
  { label: "acc2", summary: "summ2" },
];
 function Home(){
  return ( <>
    {arr.map((item)=><Accordion item={item} key={item.label}/>)}
     <Star/>
     <Timer/>
     <h1>Synthetic Events</h1>
     <SyntheticEvent/>
     <h1>Pagination</h1>
     <Pagination/>
     <h1>Use context</h1>
     <CounterContextProvider>
       <ButtonCounter/>
       <ButtonCounter2/>
     </CounterContextProvider>
     <h1>HOC</h1>
     <HOCcounter/>
     <HOCCounter2/>
     
       <h2>Redux</h2>
       <ReduxCounter/>
    
     </>)
 }
function App() {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/star' element={<StarMatchComponent/>}/>
    </Routes>
   
  );
}

export default App;
