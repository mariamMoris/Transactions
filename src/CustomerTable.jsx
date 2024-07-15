import React, { useContext, useState } from 'react';
import { ApiContext } from './ApiContext';





function CustomerTable() {
    
    const {margeData,customers,transactions} = useContext(ApiContext)
    const [searchTerm,setSearchTerm] = useState([])
    const [filteredCustomers,setFilteredCustomers] = useState([])
   
    const handleSearch= (event)=>{
        const {value} = event.target
        setSearchTerm(value);
        const filteredCustomers = margeData.filter((customer)=> customer.name.toLowerCase().includes(value.toLowerCase()))
        setFilteredCustomers(filteredCustomers)
    };
   
    return (
        <>
      
        
         <div>
    
            <h1 className='mt-5'>Customer Transactions</h1>
            <div className='text-center'>
            <input className='form-control rounded-3 w-25 ms-auto' type='text' placeholder='Search Customers Name...' value={searchTerm} onChange={handleSearch}/>
        </div>
             <table border="1" cellPadding="10">
                <thead>
                    <tr>
                        <th>Customer ID</th>
                        <th>Customer Name</th>
                        <th>Transaction Amount</th>
                        <th>Transaction Amount</th>
                    </tr>
                </thead>
                <tbody>
                    {  searchTerm == "" ?
                        margeData.map(customer=>(
                           
                                        <tr key={customer.id}>
                                        <td>{customer.id}</td>
                                        <td>{customer.name}</td>
                                        {
                                            customer.transactions.map(tran =>(
                                                <td key={tran.id}>{tran.amount}
                                                <p>At {tran.date}</p>
                                                </td>
                                            ))
                                        }
                                        
                                        
                                    </tr>
                                                           
                                    )    
                        )
                
                   :  filteredCustomers.map(customer=>(
                           
                    <tr key={customer.id}>
                    <td>{customer.id}</td>
                    <td>{customer.name}</td>
                    {
                        customer.transactions.map(tran =>(
                            <td key={tran.id}>{tran.amount}
                            <p>At {tran.date}</p>
                            </td>
                        ))
                    }
                    
             
                    
                </tr>
                                       
                )    
    )
}
                    
                   
                </tbody>
            </table>
            
        </div>
        </>
       
    );
};

export default CustomerTable;
