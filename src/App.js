import ChatBot from './components/ChatBot/ChatBot'
import { useState } from 'react';
import './App.scss';
import logo from './assets/logo.svg'
import icon from './assets/AE_icon.svg'
import payment from './assets/screenshots/payment-received.png'
import footer_img from './assets/screenshots/login-footer.jpg'
import Login from "./components/Login/Login";

function App() {

  const [displayLogin, setDisplayLogin] = useState(false)

  function handleClick() {
    setDisplayLogin(true)
    console.log(displayLogin)
  }

  return (
    <div className="App">
      {!displayLogin && <Login handleClick={handleClick} />}
      {displayLogin&& <div className="dashboard">
        <header className="header">
          <section className="header__top">
            <div className="header__left">
              <span className="header__button">☰ Menu</span>
            </div>
            <div>
              <img src={logo} alt="logo" />
            </div>
            <div className="header__right">
              {/* <img /> */}
              <p className='header__help'>Help</p>
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
              <img className="header__icon" src={icon} alt="icon" />
              <p className="header__label">-10035</p>
            </div>
          </section>
        </header>
        <section className="main">
          <article className="main__left">
            <h4 className='main__title'>Remaining Statement Balance ⓘ</h4>
            <p className="main__amount">$0</p>
            <p>Mar 08 - Apr 06</p>
            <div className="main__button1">View Transactions</div>
          </article>
          <article className="main__middle">
            <img src={payment} alt="payment-received" className='main__middle--img' />
          </article>
          <article className="main__right">
            <h4 className='main__right--title'>Total Balance ⓘ</h4>
            <p className="main__amount">$7,198.54</p>
            <p className="main__blue">Balance Details</p>
            <p> Available Credit ⓘ $10,000</p>
            <p className="main__blue">Check Spending Power</p>
          </article>
        </section>
        <article className='home'>
          <section className='home__left'>
            <section className='home__recentTransactions'>
              <div className='home__recentTransactions--header'>
                <h3 className='home__recentTransactions--title'>Recent Transactions (Since Apr 7. Closing May 7)</h3>
                <p className='home__recentTransactions--link'>View All</p>
              </div>
              <div className='home__recentTransactions-line2'>
                <h3 className='home__recentTransactions-line2--title'>Pace out your payments with Plan It®.</h3>
                <p className='home__recentTransactions-line2--link'>Create a Plan</p>
              </div>
              <div className='home__recentTransaction-item'>
                <p className='home__recentTransaction-item--column1'>May 1</p>
                <p className='home__recentTransaction-item--column2'>BRAINSTATION WEST PALM BEACH</p>
                <p className='home__recentTransaction-item--column3'>$14,000</p>
              </div>
              <div className='home__recentTransaction-item'>
                <p className='home__recentTransaction-item--column1'>May 1</p>
                <p className='home__recentTransaction-item--column2'>GOOGLE *YOUTUBEPREMIUM</p>
                <p className='home__recentTransaction-item--column3'>$11.99</p>
              </div>
              <div className='home__recentTransaction-item'>
                <p className='home__recentTransaction-item--column1'>May 1</p>
                <p className='home__recentTransaction-item--column2'>MY3SONS-FRANKLIN-AVEGAR</p>
                <p className='home__recentTransaction-item--column3'>$15.23</p>
              </div>
              <div className='home__recentTransaction-item'>
                <p className='home__recentTransaction-item--column1'>Apr 29</p>
                <p className='home__recentTransaction-item--column2'>ONLINE PAYMENT - THANK YOU</p>
                <p className='home__recentTransaction-item--column3'>$50.89</p>
              </div>
              <div className='home__recentTransaction-item'>
                <p className='home__recentTransaction-item--column1'>Apr 16</p>
                <p className='home__recentTransaction-item--column2'>RALPH'S COFFEE NEW YORK</p>
                <p className='home__recentTransaction-item--column3'>$20.99</p>
              </div>
              <div className='home__recentTransaction-item'>
                <p className='home__recentTransaction-item--column1'>Apr 16</p>
                <p className='home__recentTransaction-item--column2'>SIP AND CO 00-080403NEW YORK</p>
                <p className='home__recentTransaction-item--column3'>$23.89</p>
              </div>
              <div className='home__recentTransaction-item'>
                <p className='home__recentTransaction-item--column1'>Apr 7</p>
                <p className='home__recentTransaction-item--column2'>TST* CANNELLE PATISSLONG</p>
                <p className='home__recentTransaction-item--column3'>$75.55</p>
              </div>
            </section>
            <section className='home__referral'>
              <h4>Refer Friends, Get Rewarded</h4>
              <div className='home__referral--flex'>
                <p className="home__referral__text">You can earn: $75 Statement Credit for each eligible referral – up to $1,000 Cash back per calendar year. Your referral bonus annual limit has been increased from $550 to $1,000 Cash back per calendar year. This means you can refer more friends each year and continue to earn Cash back for eligible referrals, up to $1,000 Cash back per calendar year. Terms apply.</p>
                <div className='home__referral__button'>Refer Now</div>
              </div>
            </section>
          </section>
          <section className='home__right'>
            <section className='home__rewards'>
              <h4>Reward Dollars</h4>
              <p className="home__rewards--amount">$250.36</p>
              <div className='home__rewards--button'>Explore Rewards</div>
            </section>
            <section className='home__usefulLinks'>
              <h4>Useful Links</h4>
              <p className="main__blue">Explore The Platinum Card®</p>
              <p className="main__blue">Explore Savings Options</p>
              <p className="main__blue">Refer Friends. Earn Rewards.</p>
              <p className="main__blue">Manage Profile</p>
              <p className="main__blue">Free Credit Score & Report</p>
              <p className="main__blue">View Lending Options</p>
            </section>
          </section>
        </article>
        <img src={footer_img} alt="footer" className="login-page__footer" />
        
        <ChatBot />
      </div>}
    </div>
  );
}

export default App;

