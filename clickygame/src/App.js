import React, { Component, Fragment } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import FlowerCard from "./components/FlowerCard";
import flowers from "./flowers.json";

function App() {
  return (
    <Fragment>
    <FlowerCard>
    <FlowerCard
    image={flowers[0].image}
    />
     <FlowerCard
         image={flowers[1].image}
    />
     <FlowerCard
    image={flowers[2].image}
    />
     <FlowerCard
    image={flowers[3].image}
    />
     <FlowerCard
    image={flowers[4].image}
    />
     <FlowerCard
    image={flowers[5].image}
    />
     <FlowerCard
    image={flowers[6].image}
    />
     <FlowerCard
    image={flowers[7].image}
    />
     <FlowerCard
    image={flowers[8].image}
    />
     <FlowerCard
    image={flowers[9].image}
    />

    </FlowerCard>
    </Fragment>
  )

}


export default App;
