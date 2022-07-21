import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="Form-wrap">
        <p className="Form-title">Select Your Amount</p>

        <div className="Form-amount-wrap">
          <span className="Input-title">You Pay</span>
          <div className="Input-wrap">
            <input className="Input" />
            <div className="Symbol-wrap">
              <span className="Symbol-text">USD</span>
              <img src={require('./assets/images/usd.png')} className="Symbol-icon" />
            </div>
          </div>
        </div>


        <div className="Fees-wrap">

          <div className="Fees-left">
            <div className="Fees-line"></div>
            <div className="Ellipce-icon" />
          </div>

          <div className="Fees-right">
            <p className="Fees-text">Fees</p>
            <div className="Fees-box">

              <div className="Fees-item-wrap">
                <p className="Fees-item-title">Network Fee</p>
                <p className="Fees-item-value">10.50$</p>
              </div>

              <div className="Fees-item-wrap">
                <p className="Fees-item-value">+</p>
              </div>

              <div className="Fees-item-wrap">
                <p className="Fees-item-title">Network Fee</p>
                <p className="Fees-item-value">10.50$</p>
              </div>

              <div className="Fees-item-wrap">
                <p className="Fees-item-value">=</p>
              </div>

              <div className="Fees-item-wrap">
                <p className="Fees-item-title">Network Fee</p>
                <p className="Fees-item-value">10.50$</p>
              </div>

            </div>
          </div>




        </div>


        <div className="Form-amount-wrap">
          <span className="Input-title">You Receive</span>
          <div className="Input-wrap">
            <input className="Input" />
            <div className="Symbol-wrap">
              <span className="Symbol-text">USDC EVMOS</span>
              <img src={require('./assets/images/usd.png')} className="Symbol-icon" />
            </div>
          </div>
        </div>


      </div>
    </div>
  );
}

export default App;
