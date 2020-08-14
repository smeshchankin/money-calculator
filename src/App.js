import React, { Component } from 'react';
import Total from './components/total/Total';
import History from './components/history/History';
import Operation from './components/operation/Operation';

class App extends Component {

  state = {
    transactions: JSON.parse(localStorage.getItem('money.transactions')) || [],
    description: '',
    amount: ''
  }

  addTransaction = add => {
    const { description, amount } = this.state;
    const transaction = {
      id: `mc${(+new Date()).toString(16)}`,
      description: description,
      amount: parseFloat(amount),
      add
    };

    const transactions = [...this.state.transactions, transaction];
    this.setState({
      transactions,
      description: '',
      amount: ''
    }, this.addStorage);
  }

  addDescription = event => {
    this.setState({ description: event.target.value });
  }

  addAmount = event => {
    this.setState({ amount: event.target.value });
  }

  addStorage() {
    localStorage.setItem('money.transactions', JSON.stringify(this.state.transactions));
  }

  render() {
    return (
      <>
        <header>
          <h1>Wallet</h1>
          <h2>Money Calculator</h2>
        </header>

        <main>
          <div className="container">
              <Total transactions={this.state.transactions} />
              <History transactions={this.state.transactions} />
              <Operation description={this.state.description} amount={this.state.amount}
                addTransaction={this.addTransaction} addDescription={this.addDescription} addAmount={this.addAmount} />
          </div>
        </main>
      </>
    );
  }
}

export default App;
