import React from 'react';
import { useSelector } from 'react-redux';

const AccountBalance = () => {
    const balance = useSelector(state => state.accountBalance);
    
    return (
        <div className="account-balance-container">
            <h2>Account Balance</h2>
            <div className={`balance-amount ${balance >= 0 ? 'positive' : 'negative'}`}>
                ${balance.toFixed(2)}
            </div>
        </div>
    );
};

export default AccountBalance;