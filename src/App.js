import ChatBot from './components/ChatBot/ChatBot'
import './App.scss';
import logo from './assets/logo.svg'
import icon from './assets/AE_icon.svg'

function App() {

  return (
    <div className="App">
      <header className="header">
        <section className="header__top">
          <div className="header__left">
            <span className="header__button">Menu</span>
          </div>
          <div>
            <img src={logo} alt="logo" />
          </div>
          <div className="header__right">
            {/* <img /> */}
            <p>Help</p>
            <p>Log Out</p>
          </div>
        </section>
        <section className="header__bottom">
          <ul className="header__nav">
            <li className="header__link">Home</li>
            <li className="header__link">Statements & Activity</li>
            <li className="header__link">Payments</li>
            <li className="header__link">Account Services</li>
            <li className="header__link">Rewards & Benefits</li>
          </ul>
          <div className="header__card">
            <img className="header__icon" src={icon} alt="icon"/>
            <p className="header__label">-100354</p>
          </div>
        </section>
      </header>
      <h1>AMERICAN EXPRESS</h1>
      <ChatBot/>
    </div>
  );
}

export default App;
