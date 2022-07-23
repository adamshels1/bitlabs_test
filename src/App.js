import React, { useState, useEffect } from 'react'
import './App.css';
import { getQuotes } from './services/api/quotes'

function App() {

  const [sourceAmount, setSourceAmount] = useState('')
  const [targetAmount, setTargetAmount] = useState('')
  const [absoluteInternalFee, setAbsoluteInternalFee] = useState(0)
  const [fiatBlockchainFee, setFiatBlockchainFee] = useState(0)
  const [totalFee, setTotalFee] = useState(0)

  const handleChangeSourceAmount = async (event) => {
    setSourceAmount(event.target.value)
    if (!event.target.value) {
      return setTargetAmount('')
    }
    const response = await getQuotes({
      source_currency: 'USD',
      target_crypto_asset_id: 'b2384bf2-b14d-4916-aa97-85633ef05742',
      source_amount: event.target.value
    })
    if (response) {
      setTargetAmount(response.target_amount)
      setFiatBlockchainFee(response.fiat_blockchain_fee)
      setAbsoluteInternalFee(response.absolute_internal_fee)
      setTotalFee(response.total_fee)
    }
  }

  return (
    <div className="App">
      <div className="Form-wrap">
        <p className="Form-title">Select Your Amount</p>

        <div className="Form-amount-wrap">
          <span className="Input-title">You Pay</span>
          <div className="Input-wrap">
            <input
              className="Input"
              onChange={handleChangeSourceAmount}
              value={sourceAmount}
              placeholder="Enter USD"
              data-testid="usd-value"
            />
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
                <p className="Fees-item-value">{absoluteInternalFee}$</p>
              </div>

              <div className="Fees-item-wrap">
                <p className="Fees-item-value">+</p>
              </div>

              <div className="Fees-item-wrap">
                <p className="Fees-item-title">C14 Fee</p>
                <p className="Fees-item-value">{fiatBlockchainFee}$</p>
              </div>

              <div className="Fees-item-wrap">
                <p className="Fees-item-value">=</p>
              </div>

              <div className="Fees-item-wrap">
                <p className="Fees-item-title">Total Fee</p>
                <p className="Fees-item-value">{totalFee}$</p>
              </div>

            </div>
          </div>
        </div>

        <div className="Form-amount-wrap">
          <span className="Input-title">You Receive</span>
          <div className="Input-wrap">
            <input
              className="Input"
              value={targetAmount}
              data-testid="symbol-value"
              onChange={text => setTargetAmount(text)}
            />
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
