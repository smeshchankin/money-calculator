import React from 'react';

function Total() {
    return (
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
    );
}

export default Total;
