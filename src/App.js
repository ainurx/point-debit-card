import './App.css';

import NavigationBar from './components/NavigationBar';
import Banner from './components/Banner';
import Features from './components/Features/Features';

function App() {
  return (
    <div>
      <NavigationBar/>
      <div className='main'>
        <Banner/>
        <Features/>
      </div>
    </div>
  );
}

export default App;
