const Header = ({selectedTab, selectTab}) => {
return (<header>
        <h1 className="logo">Rafael Vecchi Silva</h1>
        <p className="sub-logo">Desenvolvedor de Software (JavaScript - React & Node)</p>
        <nav>
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
      </header>);
};

export default Header;