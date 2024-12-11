import React from 'react'
import RecordsContainer from '../Containers/RecordsContainer'

const PasswordComponent = () => {
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
      },
      {
        title: "Text 3",
        subtitle: "Text 4",
        icon: "settings",
      },
      {
        title: "Text 3",
        subtitle: "Text 4",
        icon: "settings",
      },
      {
        title: "Text 3",
        subtitle: "Text 4",
        icon: "settings",
      },
      {
        title: "Text 3",
        subtitle: "Text 4",
        icon: "settings",
      }
    ],
    pieData: {
      labels: ["Category 1", "Category 2", "Category 4"],
      datasets: [
        {
          data: [30, 50, 20],
          backgroundColor: ["red", "blue", "#FFCE56"],
        },
      ],
    }
  };
  return (
    <div>
      <RecordsContainer data={data}/>
    </div>
  )
}

export default PasswordComponent
