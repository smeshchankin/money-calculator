import React from 'react';

function Total({ transactions }) {
    const income = transactions
        .reduce((sum, item) => sum + (item.add ? item.amount : 0), 0);
    const expenses = transactions
        .reduce((sum, item) => sum + (item.add ? 0 : item.amount), 0);
    const balance = income - expenses;

    return (
        <section className="total">
            <header className="total__header">
                <h3>Balance</h3>
                <p className="total__balance">$&nbsp;{balance}</p>
            </header>
            <div className="total__main">
                <div className="total__main-item total__income">
                    <h4>Income</h4>
                    <p className="total__money total__money-income">+$&nbsp;{income}</p>
                </div>
                <div className="total__main-item total__expenses">
                    <h4>Expenses</h4>
                    <p className="total__money total__money-expenses">-$&nbsp;{expenses}</p>
                </div>
            </div>
        </section>
    );
}

export default Total;
