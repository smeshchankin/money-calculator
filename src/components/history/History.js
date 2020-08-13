import React from 'react';
import HistoryItem from './HistoryItem';

export default function() {
    return (
        <section className="history">
            <h3>History</h3>
            <ul className="history__list">
                <HistoryItem />
            </ul>
        </section>
    );
};
