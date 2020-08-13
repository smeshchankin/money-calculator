import React from 'react';
import Total from './components/total/Total';
import History from './components/history/History';
import Operation from './components/operation/Operation';

function App() {
  return (
    <>
      <header>
        <h1>Wallet</h1>
        <h2>Money Calculator</h2>
      </header>

      <main>
        <div className="container">
            <Total />
            <History />
            <Operation />
        </div>
      </main>
    </>
  );
}

export default App;
