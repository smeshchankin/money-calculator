import React from 'react';
import HistoryItem from './HistoryItem';

export default function({ transactions }) {
    return (
        <section className="history">
            <h3>History</h3>
            <ul className="history__list">
                {transactions.map(item => <HistoryItem key={item.id} transaction={item} />)}
            </ul>
        </section>
    );
};
