
import './App.css';
import Apply from './components/apply/Apply';
import Organizers from './components/organizers/Organizers';
import WhyToParticipate from './components/why to participate/WhyToParticipate';

function App() {
  return (
    <div className="App">
      <WhyToParticipate />
      <Apply />
      <Organizers />
    </div>
  );
}

export default App;
