import React from 'react';

import RecordsContainer from '../Containers/RecordsContainer'


const DeviceUsers = () => {

  
  
 

  const data = {
    cardData: [
      {
        title: "Text 1",
        subtitle: "Text 2",
        icon: "menu",
      },
      {
        title: "Text 3",
        subtitle: "Text 4",
        icon: "settings",
      }
    ],
    pieData: {
      labels: ["Category A", "Category B", "Category C"],
      datasets: [
        {
          data: [30, 50, 20],
          backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
        },
      ],
    }
  };

  return (
    <div>
      <RecordsContainer data={data} />
      
    </div>
  );
}

export default DeviceUsers;
