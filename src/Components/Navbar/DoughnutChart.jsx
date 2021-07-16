import React from 'react';
import { Doughnut } from 'react-chartjs-2';

const personaltxt='Personal Storage('+Math.floor(500*100/1024)+'%)';
const dataroomtxt='Data Room('+Math.floor(400*100/1024)+'%)';
const totaltxt='Total Rest Storage('+300+'GB/1TB)';
const data = {
  labels: [personaltxt, dataroomtxt, totaltxt],
  datasets: [
    {
      label: '# of Votes',
      data: [500, 400, 324],
      backgroundColor: [
        'blue',
        'red',
        '#e0e0e0'
      ],
      borderColor: [
        '#e0e0e0'
      ],
      borderWidth: 1,
    },
  ],
};

const titletxt='total '+Math.floor((500+400)*100/1024)+'%';
const options={
    responsive:true,
    devicePixelRatio:1,
    plugins: {
        title: {
            display: true,
            text: titletxt,
            color:'black',
            font:{
              size:16,
            }
        },
        legend: {
            align:'left',
            screenLeft:30,
            display: true,
            position:'bottom',
            labels: {
                color: 'red',
                font:{
                    size:16,
                },
                boxWidth:12,
                boxHeight:12,
            },            
        }
    }
};

const DoughnutChart = () => (
    <Doughnut data={data} options={options}/>
);

export default DoughnutChart;