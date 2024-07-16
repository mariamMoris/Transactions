import './App.css';

import React from 'react';
import CustomerTable from './CustomerTable';
import ApiContextProvider from './ApiContext';
import FilterCustomer from './FilterCustomer';
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import Layout from './Layout';


const App = () => {
    const router = createBrowserRouter([
        {path:"",element:<Layout/>,children:[
            {path:"Transactions",element:<CustomerTable/>},
            {path:"",element:<Navigate to={"home"}/>},
            {path:"home",element:<CustomerTable/>},
            {path:"chart",element:<FilterCustomer/>}
        ]}
    ])
    return (
        <>
            {/* <Chart/> */}
            <ApiContextProvider>
          <RouterProvider router={router}></RouterProvider>
            </ApiContextProvider>
            
           
        </>
    );
};

export default App;
