import React from 'react';

function App() {
  return (
    <>
      <header>
        <h1>Wallet</h1>
        <h2>Money Calculator</h2>
      </header>

      <main>
        <div className="container">
            <section className="total">
                <header className="total__header">
                    <h3>Balance</h3>
                    <p className="total__balance">$&nbsp;0</p>
                </header>
                <div className="total__main">
                    <div className="total__main-item total__income">
                        <h4>Income</h4>
                        <p className="total__money total__money-income">+$&nbsp;0</p>
                    </div>
                    <div className="total__main-item total__expenses">
                        <h4>Expenses</h4>
                        <p className="total__money total__money-expenses">-$&nbsp;0</p>
                    </div>
                </div>
            </section>

            <section className="history">
                <h3>History</h3>
                <ul className="history__list">
                    <li className="history__item history__item-plus">Salary
                        <span className="history__money">$ +3000</span>
                        <button className="history__delete">x</button>
                    </li>

                    <li className="history__item  history__item-minus">Food
                        <span className="history__money">$ -100</span>
                        <button className="history__delete">x</button>
                    </li>
                </ul>
            </section>

            <section className="operation">
                <h3>The new operation</h3>
                <form id="form">
                    <label>
                        <input type="text" className="operation__fields operation__name" placeholder="Operation name" />
                    </label>
                    <label>
                        <input type="number" className="operation__fields operation__amount" placeholder="Enter amount" />
                    </label>
                    <div className="operation__btns">
                        <button type="submit" className="operation__btn operation__btn-subtract">EXPENSES</button>
                        <button type="submit" className="operation__btn operation__btn-add">INCOME</button>
                    </div>
                </form>
            </section>
        </div>
      </main>
    </>
  );
}

export default App;
