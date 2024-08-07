import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react'


export const ApiContext = createContext()


function getCustomers(){
    return axios.get("https://raw.githubusercontent.com/mariamMoris/customersApi/main/customers.json").then((res)=>res).catch((error)=>error)
 }

 function getTransactions(){
    return axios.get("https://raw.githubusercontent.com/mariamMoris/transactionsApi/main/transactions.json").then((res)=>res).catch((error)=>error)
 }

 export default function ApiContextProvider({children}){
    const [customers,setCustomers] = useState([]);
    const [transactions,setTransactions] = useState([]);

    async function getcustomer(){
        const {data} = await getCustomers()
        setCustomers(data)
      }
      async function gettran(){
        const {data} = await getTransactions()
        setTransactions(data)
        getcustomer()

      }
      useEffect(()=>{
        gettran()
      })
      const margeData = customers.map((customer)=>{
        return{
            ...customer,
            transactions:transactions.filter(tran=>tran.customer_id == customer.id)
        }      
    })
   
    return(
        <>
        <ApiContext.Provider value={{setCustomers,customers,setTransactions,transactions,margeData}}>
           {children}
        </ApiContext.Provider>
        </>
    );
 }