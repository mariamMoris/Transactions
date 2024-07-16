import React, { useContext, useState } from 'react'
import { ApiContext } from './ApiContext'
import Chart from './Chart';

export default function FilterCustomer() {
  const {transactions,margeData} = useContext(ApiContext)
  const [selectedCustomer, setSelectedCustomer] = useState('');
  const handleCustomerSelect = (event) => {
    setSelectedCustomer(event.target.value);
  };
  
  const uniqueCustomers = Array.from(new Set(margeData.map((oneCustomer) => ({
    customerId: oneCustomer.id,
    customerName: oneCustomer.name,
  }))));
  const filterTransactionsByCustomer = (customerId) => {
    return transactions.filter((transaction) => transaction.customer_id == customerId);
  };
  const selectedCustomerData = filterTransactionsByCustomer(selectedCustomer);
  

  return (
    <div>
            <div>
      <h1 className='mt-5'>Customer Transactions</h1>
      <select className='my-3 w-25 p-2' onChange={handleCustomerSelect}>
        <option value="">Select a customer</option>
        {uniqueCustomers.map(customer => (
          <option key={customer.customerId} value={customer.customerId}>
            {customer.customerName}
          </option>
        ))}
      </select>
      {selectedCustomer && <Chart data={selectedCustomerData} />}
    </div>
      
    </div>
  )
}
