import React from 'react';

const Operation = ({ addTransaction, addDescription, addAmount }) => (
    <section className="operation">
        <h3>The new operation</h3>
        <form id="form">
            <label>
                <input type="text" onChange={addDescription} className="operation__fields operation__name" placeholder="Operation name" />
            </label>
            <label>
                <input type="number" onChange={addAmount} className="operation__fields operation__amount" placeholder="Enter amount" />
            </label>
            <div className="operation__btns">
                <button type="button" onClick={() => addTransaction(false)} className="operation__btn operation__btn-subtract">EXPENSES</button>
                <button type="button" onClick={() => addTransaction(true)} className="operation__btn operation__btn-add">INCOME</button>
            </div>
        </form>
    </section>
);

export default Operation;
