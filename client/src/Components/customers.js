import React, { useState, useEffect } from "react";

function Customers() {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    fetch("/api/customers")
      .then((res) => res.json())
      .then((customers) => setCustomers(customers));
  });

  return (
    <div>
      <h2>Customers</h2>
      <ul>
        {customers.map((customer) => (
          <li key={customer.id}>
            {customer.username} & {customer.created_at}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Customers;
