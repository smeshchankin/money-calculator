import React from 'react';

export default function() {
    return (
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
    );
};
