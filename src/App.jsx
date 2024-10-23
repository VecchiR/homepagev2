import { useState } from 'react';
import Home from './Home';
import About from './About';
import Portfolio from './Portfolio';

const App = () => {
  const [selectedTab, setSelectedTab] = useState('portfolio');

  const selectTab = (tab) => {
    setSelectedTab(tab);
  };

  return (
    <div>
      <header>
        <h1 className="logo">Rafael Vecchi Silva</h1>
        <p className="sub-logo">Desenvolvedor de Software (JavaScript - React & Node)</p>
        <nav>
          {/* <button
            className={`tab-btn ${selectedTab === 'home' ? 'selected' : ''}`}
            onClick={() => selectTab('home')}
          >
            Home
          </button> */}
          <button
            className={`tab-btn ${selectedTab === 'portfolio' ? 'selected' : ''}`}
            onClick={() => selectTab('portfolio')}
          >
            Portfolio
          </button>
          <button
            className={`tab-btn ${selectedTab === 'about' ? 'selected' : ''}`}
            onClick={() => selectTab('about')}
          >
            Sobre
          </button>
        </nav>
      </header>
      <div id="content">
        {/* {selectedTab === 'home' && <Home />} */}
        {selectedTab === 'portfolio' && <Portfolio />}
        {selectedTab === 'about' && <About />}
      </div>
    </div>
  );
};

export default App;
