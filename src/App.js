import './App.css';
import Hero from './component/Hero/Hero';
import Testimonial from './component/Testimonial/Testimonial';
import Plans from './component/Plans/Plans';
import Program from './component/Programs/Program'
import Reasons from './component/Reasons/Reasons'
import Join from './component/Join/Join';
function App() {
  return (
    <div className="App">
      <Hero/>
      <Program/>
      <Reasons/>
      <Plans/>
      <Testimonial/>
      <Join/>
    </div>
  );
}

export default App;
