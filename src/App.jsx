import { useState } from 'react';
import Home from './Home';
import About from './About';
import Portfolio from './Portfolio';
import Header from './Header';

const App = () => {
  const [selectedTab, setSelectedTab] = useState('portfolio');

  const selectTab = (tab) => {
    setSelectedTab(tab);
  };

  return (
    <div>
      <Header selectTab={selectTab} selectedTab={selectedTab}/>
      <div id="content">
        {selectedTab === 'portfolio' && <Portfolio />}
        {selectedTab === 'about' && <About />}
      </div>
    </div>
  );
};

export default App;
