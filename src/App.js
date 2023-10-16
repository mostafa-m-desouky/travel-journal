import React from 'react'
import Header from "./components/Header";
import Card from './components/Card';
import Data from "./data"
import data from './data';

export default function App() {
  const cards = data.map((items) => {
    return(
      <Card 
      key={items.id} 
      {...items}
      // imageUrl={items.imageUrl}
      // title={items.title}
      // start={items.startDate}
      // end={items.endDate}
      // description={items.description}
      />
    )
  })
  return (
    <div className='app'>
      <Header />
      {cards}
    </div>
  );
}

