import { useState } from 'react';
import Home from './Home';
import Store from './Store';
import Menu from './Menu';

const App = () => {
  const [selectedTab, setSelectedTab] = useState('home');

  const selectTab = (tab) => {
    setSelectedTab(tab);
  };

  return (
    <div>
      <header>
        <h1 className="logo">Rafael Vecchi</h1>
        <nav>
          <button
            className={`tab-btn ${selectedTab === 'home' ? 'selected' : ''}`}
            onClick={() => selectTab('home')}
          >
            Home
          </button>
          <button
            className={`tab-btn ${selectedTab === 'menu' ? 'selected' : ''}`}
            onClick={() => selectTab('menu')}
          >
            Menu
          </button>
          <button
            className={`tab-btn ${selectedTab === 'store' ? 'selected' : ''}`}
            onClick={() => selectTab('store')}
          >
            Store
          </button>
        </nav>
      </header>
      {/* <div className="image-container"></div> */}
      <div id="content">
        {selectedTab === 'home' && <Home />}
        {selectedTab === 'menu' && <Menu />}
        {selectedTab === 'store' && <Store />}
      </div>
    </div>
  );
};

export default App;