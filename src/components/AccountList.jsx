import React, { useEffect, useState } from 'react';

const AccountList = () => {
  const [accounts, setAccounts] = useState([]);

  useEffect(() => {
    // In a real project, replace this with an actual API call
    fetch('/mock-api/accounts.json')
      .then(r => r.json())
      .then(setAccounts)
      .catch(() => setAccounts([]));
  }, []);

  return (
    <div className="container mt-3">
      <h2>Customer Accounts</h2>
      <ul className="list-group">
        {accounts.map(a => (
          <li key={a.id} className="list-group-item">
            {a.accountName} – {a.balance} USD
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AccountList;
