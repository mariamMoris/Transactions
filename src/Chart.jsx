import React, { useContext, useState } from 'react'
import { Chart as ChartJs,BarElement,  CategoryScale, LinearScale } from 'chart.js'
import { Bar, Line } from 'react-chartjs-2'
import { ApiContext } from './ApiContext'

ChartJs.register(
   CategoryScale,
   LinearScale,
    BarElement
);

export default function Chart({data}) {
        const labels = data.map(transaction => transaction.date);
        const values = data.map(transaction => transaction.amount);
    
    const dataset = {
          labels: labels,
          datasets: [{
            label: '# of Votes',
            data: values,
            borderWidth: 1,
            backgroundColor: 'rgb(229, 149, 96)',
          borderColor: 'rgb(229, 149, 96)',
          }]
        }

      var options = {
        maintainAspectRatio:false,
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
      
  return (
    <div>
      <Bar
      data={dataset}
      height={400}
      options={options}
      />
     
    </div>
  )
}
